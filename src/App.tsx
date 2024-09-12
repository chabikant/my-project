// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import './styles/global.scss';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('accessToken'); // Check for authentication token

  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Home route - protected, redirect to login if not authenticated */}
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />

          {/* Login route */}
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />

          {/* Fallback route */}
          <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
