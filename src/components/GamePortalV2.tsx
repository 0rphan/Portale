// GamePortal.tsx
import React from 'react';
import GameList from './GameList'; // Import the GameList component

const GamePortal: React.FC = () => {
  return (
    <div className="game-portal">
      <h1>Game Portal</h1>
      <GameList /> {/* Render the GameList here */}
    </div>
  );
};

export default GamePortal;
