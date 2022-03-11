import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Secondary from './pages/Secondary';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="secondary" element={<Secondary />} />
    </Routes>
  );
}

export default App;
