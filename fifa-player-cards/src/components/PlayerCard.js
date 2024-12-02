import React from "react";
import './PlayerCard.css';
import Flag from "react-world-flags";
import players from '../data/player'; // Importing the player data

const PlayerCard = ({ player }) => {
  const countryCode = {
    Argentina: "AR",
    Portugal: "PT",
    Egypt: "EG",
    Norway: "NO",
    France: "FR",
    Brazil: "BR",
    Spain: "ES",
    England: "GB",
  }[player.nationality];

  return (
    <div className="player-card">
      <div className="card-header">
        <img 
          src={player.imageUrl} 
          alt={player.name} 
          className="player-image" 
          onError={(e) => { e.target.src = "/path-to-fallback-image.png"; }}
        />
        <div className="player-info">
          <h3 aria-label={`Player name: ${player.name}`}>{player.name}</h3>

          <span className="nationality" >
              <Flag code={countryCode} style={{ width: '40px', marginRight: '8px', marginBottom: '5px' }} />
            </span>
          <p aria-label={`Player position: ${player.position.join(", ")}`}>
            {player.position.join(", ")}
          </p>
           <p aria-label={`Player team: ${player.team}`}>{player.team}</p>
          <p aria-label={`Player jersey number: ${player.jerseyNumber}`}>
            Jersey Number: {player.jerseyNumber}
          </p>
          <p aria-label={`Player age: ${player.age}`}>Age: {player.age}</p>

          
          
        </div>
      </div>
      <div className="card-body">
        <div className="rating">
          <h4 aria-label={`Player rating: ${player.rating}`}>Rating: {player.rating}</h4>
        </div>
        <div className="stats">
          <ul>
            <li>Pace: {player.stats.pace}</li>
            <li>Shooting: {player.stats.shooting}</li>
            <li>Passing: {player.stats.passing}</li>
            <li>Dribbling: {player.stats.dribbling}</li>
            <li>Defending: {player.stats.defending}</li>
            <li>Physical: {player.stats.physical}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const PlayerList = () => {
  return (
    <div className="player-list">
      {players.map((player) => (
        <PlayerCard key={`${player.name}-${player.jerseyNumber}`} player={player} />
      ))}
    </div>
  );
};

export default PlayerList;
