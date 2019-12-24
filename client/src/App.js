import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/articles" component={HomePage} />
            <Route exact path="/blog" component={HomePage} />
            <Route exact path="/products" component={HomePage} />
            <Route exact path="/petitions" component={HomePage} />
            <Route exact path="/partnerships" component={HomePage} />
            <Route exact path="/funding" component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
