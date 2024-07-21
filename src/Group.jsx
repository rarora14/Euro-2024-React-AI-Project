// Group.jsx
import React from 'react';
import Flag from 'react-world-flags';

const countryCodes = {
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
  Türkiye: 'TR',
  Georgia: 'GE',
  Portugal: 'PT',
  Czechia: 'CZ',
};

function Group({ name, teams }) {
  return (
    <div className="group">
      <h2>{name}</h2>
      {teams.map((team, index) => (
        <div key={index} className="team">
          <div className="team-info">
            <Flag code={countryCodes[team.name]} style={{ width: '20px', height: '20px', marginRight: '10px' }} />
            {team.name}
          </div>
          <div className="team-points">
            Points: {team.points}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Group;
