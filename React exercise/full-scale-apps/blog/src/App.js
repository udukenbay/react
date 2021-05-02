import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Container from './Container.js';

class App extends Component {
  render(){
    return (
      <div>
        <Navbar />
        <Header />

        <Container />

        <hr />


        <Footer />
      </div>
    );
  }

}

export default App;
