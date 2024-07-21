import React from 'react';
import './TopGoals.css';

const TopGoals = () => {
  return (
    <div className="top-goals-container">
      <div className="video-container">
        <iframe
          className="video-frame"
          src="https://www.youtube.com/embed/54IkEGcvJKo"
          title="Top 10 Goals of Euro 2024"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TopGoals;
