import React, { useState } from 'react';
import { gamesData } from '../data/gameData'; // Ensure to import games data
import GameCard from './GameCard'; // Import the GameCard component

const GameList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter games based on the active category
  const filteredGames = activeCategory === 'All' 
    ? gamesData
    : gamesData.filter(game => game.category === activeCategory);

  return (
    <div className="game-portal">
      <h1>Language & Guessing Games Portal</h1>

      {/* Tab navigation */}
      <div className="tabs">
        {['All', 'Favorite', 'Word Guessing', 'Geography', 'Photography', 'Word Puzzle', 'Pokemon', 'Music', 'Movies'].map(category => (
          <button 
            key={category} 
            className={activeCategory === category ? 'active' : ''} 
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Game list */}
      <div className="game-list">
        {filteredGames.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameList;
