import React, { Component } from 'react';
import Postpreview from './Postpreview.js';

export default class Container extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <Postpreview />
          </div>
        </div>
      </div>
    );
  }
}
