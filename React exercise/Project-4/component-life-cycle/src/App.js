import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Body />
      </header>
    </div>
  );
}

class Body extends Component {
  constructor(props){
    super(props);

    this.state = {
      rndm: 0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber(){
    //console.log("random number called");
    this.setState({rndm: Math.floor(Math.random()*10) })
  }

  render(){
    return(
      <div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getRandomNumber}>Random number</button>
        <Numbers myNumber={this.state.rndm} />

      </div>
    );
  }
}

class Numbers extends Component{
  componentDidMount(){
    console.log("componentDidMount called here");
  }

  componentWillMount(){
    console.log("componentWillMount called here");
  }

  componentWillReceiveProps(newProps){
    console.log("componentWillReceiveProps called here");
  }

  shouldComponentUpdate(newProps, nextState){
    console.log("Called should component Update");
    return true;
  }

  componentWillUpdate(newProps, nextState){
    console.log("Called component Will Update");
  }

  componentDidUpdate(newProps, nextState){
    console.log("Called component Did Update");
  }

  componentWillUnmount(){
    console.log("Called componentWill un mount");
  }



  render(){
    return(
      <div>
        <br />
        {this.props.myNumber}
      </div>
    );
  }
}

export default App;
