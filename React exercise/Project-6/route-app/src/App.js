import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React Router Class</h2>

      </header>
      <ul>
        <li><Link to="/One">One</Link></li>
        <li><Link to="/Two">Two</Link></li>
        <li><Link to="/Three">Three</Link></li>
        <li><Link to="/Four">Four</Link></li>
      </ul>
    </div>
  );
}

export default App;
