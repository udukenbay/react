import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import App from './App';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Fourpointone from './Fourpointone';
import NoMatch from './NoMatch';

ReactDOM.render(<Router>
  <div>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/One" component={One}></Route>
      <Route path="/Two" component={Two}></Route>
      <Route path="/Three" component={Three}></Route>
      <Route path="/Four" component={Four}></Route>
      <Route path="/Four/:id" component={Fourpointone}/>
      <Route path="*" component={NoMatch}></Route>
    </div>

</Router>


, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
