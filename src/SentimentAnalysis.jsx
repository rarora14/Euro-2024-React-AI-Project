import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SentimentAnalysis.css'; 

const SentimentAnalysis = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/sentiment')
            .then(response => {
                setArticles(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="sentiment-container">
            <h1 className="sentiment-header">Sentiment Analysis</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {articles.map((article, index) => (
                    <div key={index} className="sentiment-box">
                        <img src={article.urlToImage} alt={article.title} className="sentiment-image" />
                        <h2 className="sentiment-title">{article.title}</h2>
                        <p className="sentiment-description">{article.description}</p>
                        <p className="sentiment-score"><strong>Sentiment:</strong> {article.sentiment.toFixed(2)}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SentimentAnalysis;
