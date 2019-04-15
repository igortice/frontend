import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';

import Box from './pages/Box';
import Main from './pages/Main';

export default () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Main} />
      <Route path='/box/:id' component={Box} />
    </Switch>
  </Router>
);
