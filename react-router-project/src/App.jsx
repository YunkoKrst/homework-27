import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>Home</NavLink></li>
            <li><NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>About</NavLink></li>
            <li><NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>Contact</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="team" element={<h3>Наша команда</h3>} />
            <Route path="company" element={<h3>Про компанію</h3>} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;