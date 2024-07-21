import React from 'react';
import './RisingStars.css';
import FlorianWirtz from './assets/FlorianWirtz.jpg';
import LamineYamal from './assets/LamineYamal.jpg';
import ArdaGuler from './assets/ArdaGuler.jpg';
import GeorgesMikautadze from './assets/GeorgesMikaudze.jpg';
import JudeBellingham from './assets/Bellingham3.jpg';
import JamalMusiala from './assets/JamalMusiala.jpg';
import NicoWilliams from './assets/NicoWilliams.jpg';
import RiccardoCalafiori from './assets/Calafiori.jpg';
import XaviSimons from './assets/XaviSimmons.jpg';
import GiorgiMamardashvili from './assets/GiorgiMamardashvilli.jpg';

const players = [
  { name: 'Florian Wirtz', image: FlorianWirtz, caption: 'Exciting young talent from Germany' },
  { name: 'Lamine Yamal', image: LamineYamal, caption: 'Emerging star from Spain' },
  { name: 'Arda Guler', image: ArdaGuler, caption: 'Turkish prospect making waves' },
  { name: 'Georges Mikautadze', image: GeorgesMikautadze, caption: 'Georgian striker on the rise' },
  { name: 'Jude Bellingham', image: JudeBellingham, caption: 'English midfield sensation' },
  { name: 'Jamal Musiala', image: JamalMusiala, caption: 'Talented German attacking midfielder' },
  { name: 'Nico Williams', image: NicoWilliams, caption: 'Spanish winger with promising future' },
  { name: 'Riccardo Calafiori', image: RiccardoCalafiori, caption: 'Skilled Italian defender' },
  { name: 'Xavi Simons', image: XaviSimons, caption: 'Dutch midfielder with Barcelona roots' },
  { name: 'Giorgi Mamardashvili', image: GiorgiMamardashvili, caption: 'Young Georgian goalkeeper' },
];

function RisingStars() {
  return (
    <div className="rising-stars-container">
      <div className="stars-header">
        <h2>Rising Stars</h2>
        <p>Discover the young talents who made an impact at Euro 2024 </p>
      </div>
      <div className="rising-stars-grid">
        {players.map((player, index) => (
          <div key={index} className="star-card">
            <img src={player.image} alt={player.name} className="star-image" />
            <div className="star-details">
              <h3>{player.name}</h3>
              <p className="caption">{player.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RisingStars;
