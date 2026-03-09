import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cookware from './pages/Cookware';
import Bakeware from './pages/Bakeware';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cookware" element={<Cookware />} />
        <Route path="/bakeware" element={<Bakeware />} />
      </Routes>
    </Router>
  );
}

export default App;
