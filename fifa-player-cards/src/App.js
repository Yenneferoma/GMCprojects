// src/App.js
import React from 'react';
import './App.css';
import PlayerList from './components/PlayerCard'; // Import the PlayerList component

function App() {
  return (
    <div className="App">
      <h1>FIFA Player Cards</h1>
      <PlayerList />
    </div>
  );
}

export default App;
