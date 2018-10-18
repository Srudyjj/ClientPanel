import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavBar from './components/layout/AppNavBar';
import DashBoard from './components/layout/DashBoard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="">
          <AppNavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={DashBoard} />
            </Switch>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
