import React, { Component} from 'react';
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

var firebaseConfig = {
    apiKey: "AIzaSyCZvv4y6qgI1vqqaBs5UWSt_7Rrd__1_60",
    authDomain: "usurvey-63220.firebaseapp.com",
    databaseURL: "https://usurvey-63220.firebaseio.com",
    projectId: "usurvey-63220",
    storageBucket: "usurvey-63220.appspot.com",
    messagingSenderId: "753040125509"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

class Authen extends Component {

  login(event){
    event.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);

    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);

    promise.then(user => {
      var lout = document.getElementById('logout');

      //Write a welcome message for user
      lout.classList.remove('hide');
    });

    promise.catch(e => {
      var err = e.message;
      console.log(err);
      this.setState({err: err});
    });
  }

  signup(){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);

    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise
    .then(user => {
      var err = "Welcome "+ user.email
      firebase.database().ref('users/'+user.uid).set({
        email: user.email
      });
      console.log(user);
      this.setState({err: err});
    });
    promise
    .catch(e => {
      var err = e.message;
      console.log(err);
      this.setState({err: err});
    });
  }

  logout(){
    firebase.auth().signOut();
    var lout = document.getElementById('logout');

    //Write a welcome message for user
    lout.classList.add('hide');
  }

  google(){
    console.log("sign in with google account");

    var provider = new firebase.auth.GoogleAuthProvider();
    var promise = firebase.auth().signInWithPopup(provider);

    promise.then( result => {
      var user = result.user;
      console.log(result);

      firebase.database().ref('users/'+user.uid).set({
        email: user.email,
        name: user.displayName
      });

    });

    promise.catch( e => {
      var err = e.message;
      console.log(err);
      this.setState({err: err});
    });
  }

  constructor(props){
    super(props);

    this.state = {
      err: ''
    };
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.google = this.google.bind(this);
  }

  render(){
    return(
      <div>
        <input id="email" ref="email" type="email" placeholder="Enter your email" /> <br />
        <input id="pass" ref="password" type="password" placeholder="Enter your password" /> <br />
        <p>{this.state.err}</p>
        <button onClick={this.login}>Log In</button>
        <button onClick={this.signup}>Sign up</button>
        <button onClick={this.logout} id="logout" className="hide">Log out</button> <br />
        <button onClick={this.google} className="google">Sign In with Google</button>
      </div>
    );
  }
}

export default Authen;
