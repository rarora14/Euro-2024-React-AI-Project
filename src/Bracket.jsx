// Bracket.jsx
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

function Bracket({ teams }) {
  return (
    <div className="bracket">
      {teams.map((team, index) => (
        <div key={index} className="team">
          <Flag code={countryCodes[team.name]} style={{ width: '20px', height: '20px', marginRight: '10px' }} />
          {team.name}
        </div>
      ))}
    </div>
  );
}

export default Bracket;
