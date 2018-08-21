import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from "../pages/home"

class Manage extends Component {
  
  render() {
    return (
      <div className="manage">
        <HashRouter>
          <div>
            <Route exact path="/" component={Home}/>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default Manage;
