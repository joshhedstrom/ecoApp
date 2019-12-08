import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/articles" component={LoginPage} />
            <Route exact path="/blog" component={SignupPage} />
            <Route exact path="/products" component={SignupPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
