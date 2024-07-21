import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Flag from 'react-world-flags';
import './Results.css';

const teamCodes = {
  Germany: 'DE',
  Scotland: 'GB-SCT',
  Hungary: 'HU',
  Switzerland: 'CH',
  Spain: 'ES',
  Croatia: 'HR',
  Italy: 'IT',
  Albania: 'AL',
  Slovenia: 'SI',
  Denmark: 'DK',
  Serbia: 'RS',
  England: 'GB-ENG',
  Poland: 'PL',
  Netherlands: 'NL',
  Austria: 'AT',
  France: 'FR',
  Belgium: 'BE',
  Slovakia: 'SK',
  Romania: 'RO',
  Ukraine: 'UA',
  Turkey: 'TR',
  Georgia: 'GE',
  Portugal: 'PT',
  Czechia: 'CZ'
};

function Results() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v4/competitions/EC/matches', {
          headers: { 'X-Auth-Token': import.meta.env.VITE_FOOTBALL_API_KEY }
        });
        setMatches(response.data.matches);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.toString());
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return 'Loading...';
  if (error) return `An error occurred: ${error}`;

  return (
    <div className="results-container">
      {matches.map(match => (
        <div key={match.id} className="match">
          <div className="team">
            <Flag code={teamCodes[match.homeTeam.name]} className="flag" />
            <p>{match.homeTeam.name}</p>
          </div>
          <p>{match.score.fullTime.home} - {match.score.fullTime.away}</p>
          <div className="team">
            <Flag code={teamCodes[match.awayTeam.name]} className="flag" />
            <p>{match.awayTeam.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
