import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Account } from '../pages';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/account" component={Account} />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter;
