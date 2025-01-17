import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Login from './Login.jsx';
import User from './User.jsx';
import Events from './Events.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: []
    };

  }

  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}>
          </Route>
          <Route path="/:users" component={User}>
          </Route>
          <Route>
            <div>404 page not available</div>
          </Route>
        </Switch>
      </Router>
    </div>
    )
  }
}



export default App;