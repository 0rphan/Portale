import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Typography, IconButton, CardActions, Divider } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Game, gamesData } from '../data/gameData'; // Assuming the GAMES dataset is imported here

const GamePortal = () => {
  const [filter, setFilter] = useState('All');
  const [games, setGames] = useState(gamesData);

  const toggleFavorite = (gameId: string) => {
    setGames(games.map(game => 
      game.id === gameId ? { ...game, favorite: !game.favorite } : game
    ));
  };

  const toggleCompleted = (gameId: string) => {
    setGames(games.map(game => 
      game.id === gameId ? { ...game, completed: !game.completed } : game
    ));
  };

  const getUniqueCategories = (games: Game[]): string[] => {
    const categories = Object.values(games).map((game) => game.category);
    const uniqueCategories = Array.from(new Set(categories));
    return ['All', 'Favorite', ...uniqueCategories];
  };

  const filteredGames = filter === 'All' ? games : games.filter(game => game.category === filter || (filter === 'Favorite' && game.favorite));

  return (
    <Box sx={{ backgroundColor: 'white', padding: '20px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
        Language & Guessing Games Portal
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: '20px' }}>
        {getUniqueCategories(games).map((category) => (
          <Button
            key={category}
            variant={filter === category ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => setFilter(category)}
            sx={{ textTransform: 'none', padding: '6px 12px' }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {filteredGames.map((game) => (
        <Card key={game.id} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px', backgroundColor: '#f9f9f9' }}>
          <CardContent sx={{ flex: 1, padding: '16px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
              {game.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px' }}>
              {game.description}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Category: {game.category}
            </Typography>
          </CardContent>
          
          <Box sx={{ padding: '8px' }}>
            <img src={game.image} alt={game.name} width="100" height="100" />
          </Box>

          <Divider orientation="vertical" flexItem sx={{ marginX: '12px' }} />
          
          <CardActions sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', padding: '16px' }}>
            <Button
              variant="contained"
              color="secondary"
              href={game.url}
              target="_blank"
              sx={{ fontSize: '0.75rem', textTransform: 'none', marginBottom: '10px' }}
            >
              Play Now
            </Button>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton onClick={() => toggleCompleted(game.id)} color={game.completed ? 'success' : 'default'}>
                <CheckCircleIcon />
              </IconButton>
              <IconButton onClick={() => toggleFavorite(game.id)} color={game.favorite ? 'error' : 'default'}>
                {game.favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            </Box>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default GamePortal;