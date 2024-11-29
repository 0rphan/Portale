import React from 'react';
import './App.css'; // Import any global styles
import GamePortal from './components/GamePortal'; // Adjust the import if the path is different
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Button } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Replace with your desired primary color
    },
    secondary: {
      main: '#dc004e', // Replace with your desired secondary color
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GamePortal /> {/* Render the GamePortal component */}
      </div>
    </ThemeProvider>
  );
}

export default App;
