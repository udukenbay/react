import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales.js';

function App() {

  var courses = [
    { name: 'Complete iOS10 dev course', price: 199 },
    { name: 'Complete pentesting course', price: 299 },
    { name: 'Complete front end dev course', price: 180 },
    { name: 'Bug Bounty and web app pentesting ', price: 190 }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Course Purchase</h2>
        <Coursesales items={courses}/>
      </header>
    </div>
  );
}

export default App;
