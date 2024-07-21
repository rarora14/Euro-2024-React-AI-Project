import React from 'react';
import './Home.css'; // Import the updated CSS file
import euroFrontPagePic from './assets/euro-frontpage-pic.jpg';
import euroCodingLanguagesVisual from './assets/euro-coding-languages-visual.png';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="images-container">
          <img src={euroCodingLanguagesVisual} alt="Coding Languages Visual" className="coding-languages-image" />
          <img src={euroFrontPagePic} alt="Euro 2024" className="home-image" />
        </div>
        <div className="home-text">
          <h1>Welcome to the Euro 2024 Project!</h1>
          <p>
            This project combines React + Vite with Artificial Intelligence, utilizing Python for sentiment analysis, to provide a comprehensive overview of the 17th edition of the UEFA Euro tournament, held in Germany from June 14 to July 14, 2024. Spain emerged victorious, defeating England 2-1 to become European champions for the fourth time.
          </p>
          <p>
            Key features include:
          </p>
          <ul>
            <li>Official standings of the tournament</li>
            <li>Teams that qualified for the knockout stages</li>
            <li>Results of all 51 matches</li>
            <li>The top 10 goals of the tournament</li>
            <li>A showcase of rising stars</li>
            <li>Sentiment analysis using AI and machine learning</li>
          </ul>
          <p>
            Acknowledgements: Thanks to football-data.org for match data, NewsAPI.org for sentiment analysis data, and UEFA for the images used throughout this project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
