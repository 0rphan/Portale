import React, { useState, useEffect } from 'react';
import { Game } from '../data/gameData'; // Assuming the Game type is defined in gameData
import { IconButton, Button } from '@mui/material';
import { Favorite, FavoriteBorder, CheckCircle, CheckCircleOutline } from '@mui/icons-material';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  // State to track if the game is marked as complete or favorite
  const [isComplete, setIsComplete] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Get the class name for category color
  const categoryClass = `category-${game.category.toLowerCase().replace(' ', '-')}`;

  // Toggle complete status
  const toggleComplete = () => {
    setIsComplete(!isComplete);
  };

  // Toggle favorite status
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleButtonClick = (url: string) => {
    window.open(url, '_blank'); // Opens the URL in a new tab
  };

  // Persist favorite state locally (localStorage) or fetch it on component mount
  useEffect(() => {
    // Fetch the favorite status from localStorage if available
    const storedFavorite = localStorage.getItem(`favorite-${game.name}`);
    if (storedFavorite) {
      setIsFavorite(JSON.parse(storedFavorite));
    }
  }, [game.name]);

  useEffect(() => {
    // Store the favorite status in localStorage
    localStorage.setItem(`favorite-${game.name}`, JSON.stringify(isFavorite));
  }, [isFavorite, game.name]);

  return (
    <div className="game-card">
      <div className="game-info">
        <h2>{game.name}</h2>
        <p>{game.description}</p>
        <p>Category: {game.category}</p>
      </div>

      <div className="game-actions">
        <span className={`category ${categoryClass}`}>
          {game.category}
        </span>

        {/* Favorite Button */}
        <IconButton
          color={isFavorite ? 'primary' : 'default'}
          onClick={toggleFavorite}
          aria-label="favorite"
        >
          {isFavorite ? <Favorite /> : <FavoriteBorder />}
        </IconButton>

        {/* Complete Button */}
        <IconButton
          color={isComplete ? 'success' : 'default'}
          onClick={toggleComplete}
          aria-label="complete"
        >
          {isComplete ? <CheckCircle /> : <CheckCircleOutline />}
        </IconButton>

        <Button onClick={() => handleButtonClick(game.url)} variant="contained" color="primary">Play Now</Button>
      </div>
    </div>
  );
};

export default GameCard;
