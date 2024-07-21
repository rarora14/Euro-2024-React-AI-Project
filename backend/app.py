from flask import Flask, jsonify, request
from flask_cors import CORS
import json
from textblob import TextBlob

app = Flask(__name__)
CORS(app)

@app.route('/api/sentiment', methods=['GET'])
def get_sentiment():
    try:
        with open('stored_articles.json', 'r') as f:
            articles = json.load(f)
            for article in articles:
                sentiment = TextBlob(article['description']).sentiment.polarity
                article['sentiment'] = sentiment
            return jsonify(articles)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
