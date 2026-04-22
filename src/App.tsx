import Home from './pages/Main/Home.tsx';
import { Routes, Route } from 'react-router-dom';
import Privacy from './pages/Privacy/Privacy.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}

export default App;
