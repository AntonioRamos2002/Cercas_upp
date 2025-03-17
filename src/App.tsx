import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login'; // Tu componente de Login
import MallasPage from './components/MallasPage'; // La nueva página

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mallas" element={<MallasPage />} />
      </Routes>
    </Router>
  );
}

export default App;