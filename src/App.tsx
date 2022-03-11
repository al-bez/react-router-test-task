import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { PokemonContainer } from './containers';
import Dashboard from './pages/Dashboard';
import Favorite from './pages/Favorite';

function App() {
  return (
    <Container>
      <PokemonContainer>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="favourite" element={<Favorite />} />
        </Routes>
      </PokemonContainer>
    </Container>
  );
}

export default App;
