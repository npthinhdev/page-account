import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Account } from '../pages';
import BaseLayout from '../layouts/Base';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <BaseLayout />
        <Switch>
          <Route exact path="/"><Redirect to="/account" /></Route>
          <Route path="/account" component={Account} />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter;
