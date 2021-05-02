import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Parent />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class Parent extends Component {
  constructor(props){
    super(props);

    this.state = {
      cars: ['s-BMW', 's-MERC', 's-City', 's-Audi']
    };
    //this.handleClick = this.handleClick.bind(this);//1 way
  }

  handleClick(){
    this.setState( {cars: this.state.cars.reverse()});
  }

  render(){
    return(
      <div>
        <h2 onClick={this.handleClick.bind(this)}>Just some info</h2>//2 way
        <Cars msg="Cars are cool" model="34756" coolCars={this.state.cars}/>
      </div>
    );
  }
}


Parent.defaultProps = {
  cars: ['BMW', 'MERC', 'City', 'Audi']
}

class Cars extends Component {
  render(){
    console.log(this.props);
    return(
      <div>
        <h3>I am Cars from Component</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
        <div>{this.props.coolCars.map((item, i)=>{
            return <p key={i}>{item}</p>;
          })}</div>
      </div>
    );
  }
}

export default App;
