import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookOpen, faLightbulb, faQuoteLeft, faStream, faHandsHelping, faSearchDollar } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

library.add(faBookOpen, faLightbulb, faQuoteLeft, faStream, faHandsHelping, faSearchDollar);

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
