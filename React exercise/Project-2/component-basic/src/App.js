import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.yourName = "ammy";
    this.state = {};
  }

  sayhello(name){
    return "Hello " + name;
  }

  render(){
    const myName = 'sammy';
    return (
      <div className="App">
        <h2>Just some sample data: {myName}</h2>
        <p>Just some sample data: { this.sayhello('Johny')}</p>
        <p>Example of constructor: { this.yourName}</p>
      </div>
    );
}



}

export default App;
