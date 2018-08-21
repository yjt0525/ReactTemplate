import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Login from "./components/pages/login";
import Manage from "./components/common/manage";

class App extends Component {

  render() {
    return (
      <div className="app">
        <HashRouter>
          <div>
            <Route path="/login" component={Login}/>
            <Route path="/" component={Manage}/>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
