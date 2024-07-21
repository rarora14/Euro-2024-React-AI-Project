import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Group from './Group.jsx';
import Bracket from './Bracket.jsx';
import Results from './Results.jsx';
import RisingStars from './RisingStars.jsx';
import SentimentAnalysis from './SentimentAnalysis.jsx'; 
import TopGoals from './TopGoals.jsx'; 
import Home from './Home.jsx'; 
import euroTaskbarWording from './assets/euro-taskbar-wording.png';

function App() {
  const [groups, setGroups] = useState({
    'Group A': [
      { name: 'Germany', points: 7 },
      { name: 'Switzerland', points: 5 },
      { name: 'Hungary', points: 3 },
      { name: 'Scotland', points: 1 }
    ],
    'Group B': [
      { name: 'Spain', points: 9 },
      { name: 'Italy', points: 4 },
      { name: 'Croatia', points: 2 },
      { name: 'Albania', points: 1 }
    ],
    'Group C': [
      { name: 'England', points: 5 },
      { name: 'Denmark', points: 3 },
      { name: 'Slovenia', points: 3 },
      { name: 'Serbia', points: 2 }
    ],
    'Group D': [
      { name: 'Austria', points: 6 },
      { name: 'France', points: 5 },
      { name: 'Netherlands', points: 4 },
      { name: 'Poland', points: 1 }
    ],
    'Group E': [
      { name: 'Romania', points: 4 },
      { name: 'Belgium', points: 4 },
      { name: 'Slovakia', points: 4 },
      { name: 'Ukraine', points: 4 }
    ],
    'Group F': [
      { name: 'Portugal', points: 6 },
      { name: 'Türkiye', points: 6 },
      { name: 'Georgia', points: 4 },
      { name: 'Czechia', points: 1 }
    ]
  });

  const [bracketTeams, setBracketTeams] = useState([]);

  const handleAdvanceToKnockoutStage = () => {
    const topTwoTeams = Object.values(groups).flatMap(group => group.slice(0, 2));
    const thirdPlaceTeams = Object.values(groups).flatMap(group => group.slice(2, 3));

    // Sorting third place teams by points
    thirdPlaceTeams.sort((a, b) => b.points - a.points);

    // Selecting top 4 third place teams
    const topFourThirdPlaceTeams = thirdPlaceTeams.slice(0, 4);

    // Including Slovenia if it's a tie
    const sloveniaIndex = thirdPlaceTeams.findIndex(team => team.name === 'Slovenia');
    const hungaryIndex = thirdPlaceTeams.findIndex(team => team.name === 'Hungary');

    if (thirdPlaceTeams[3].points === 3 && sloveniaIndex > hungaryIndex) {
      topFourThirdPlaceTeams[3] = thirdPlaceTeams[sloveniaIndex];
    }

    setBracketTeams([...topTwoTeams, ...topFourThirdPlaceTeams]);
  };

  return (
    <Router>
      <div className="App">
        <nav>
        <img src={euroTaskbarWording} alt="Euro 2024" className="taskbar-image" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bracket">Standings</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
            <li>
              <Link to="/topgoals">Top Goals</Link>
            </li>
            <li>
              <Link to="/rising-stars">Rising Stars</Link>
            </li>
            <li>
              <Link to="/sentiment-analysis">Sentiment Analysis</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bracket" element={<BracketPage groups={groups} handleAdvanceToKnockoutStage={handleAdvanceToKnockoutStage} bracketTeams={bracketTeams} />} />
          <Route path="/results" element={<Results />} />
          <Route path="/topgoals" element={<TopGoals />} />
          <Route path="/rising-stars" element={<RisingStarsPage />} />
          <Route path="/sentiment-analysis" element={<SentimentAnalysisPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function RisingStarsPage() {
  return (
    <div className="App">
      <div className="rising-stars-container">
        <RisingStars />
      </div>
    </div>
  );
}

function BracketPage({ groups, handleAdvanceToKnockoutStage, bracketTeams }) {
  return (
    <div className="App">
      <div className="groups">
        {Object.entries(groups).map(([name, teams]) => (
          <Group key={name} name={name} teams={teams} />
        ))}
      </div>
      <div className="bracket-container">
        <button style={{ marginTop: '45px', width: '1050px' }} onClick={handleAdvanceToKnockoutStage}>Advance to Knockout Stage</button>
        <Bracket teams={bracketTeams} />
      </div>
    </div>
  );
}

function SentimentAnalysisPage() {
  return (
    <div className="App">
      <SentimentAnalysis />
    </div>
  );
}

export default App;
