from flask import Flask, jsonify, request
from flask_cors import CORS
import json
from textblob import TextBlob
import requests
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

# Load environment variables from .env file
load_dotenv()

# Getting the News API key from environment variables
NEWS_API_KEY = os.getenv('NEWS_API_KEY')

def fetch_articles_from_api():
    url = f'https://newsapi.org/v2/everything?q=Euro 2024&from=2024-06-15&sortBy=publishedAt&apiKey={NEWS_API_KEY}'
    response = requests.get(url)
    if response.status_code == 200:
        return response.json().get('articles', [])
    else:
        return []

def store_articles(articles):
    with open('stored_articles.json', 'w') as f:
        json.dump(articles, f, indent=4)

def load_stored_articles():
    if os.path.exists('stored_articles.json'):
        with open('stored_articles.json', 'r') as f:
            return json.load(f)
    else:
        return []

@app.route('/api/sentiment', methods=['GET'])
def get_sentiment():
    try:
        # Fetching new articles from the News API
        new_articles = fetch_articles_from_api()
        
        # Loading previously stored articles
        stored_articles = load_stored_articles()

        # Combining new articles with stored articles
        combined_articles = new_articles + stored_articles

        # Removing duplicate articles based on the URL
        seen_urls = set()
        unique_articles = []
        for article in combined_articles:
            if article['url'] not in seen_urls:
                seen_urls.add(article['url'])
                unique_articles.append(article)

        # Performing sentiment analysis on unique articles
        for article in unique_articles:
            sentiment = TextBlob(article['description']).sentiment.polarity
            article['sentiment'] = sentiment

        # Storing the unique articles
        store_articles(unique_articles)

        return jsonify(unique_articles)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
