import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Account } from '../pages';
import BaseLayout from '../layouts/Base';

interface Props { };
interface State {
  nodeComp: React.ReactNode
};

class AppRouter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nodeComp: null
    }
  }
  callbackFunc = (data: React.ReactNode) => {
    this.setState({ nodeComp: data });
  }
  render() {
    return (
      <Router>
        <BaseLayout headerFunc={this.state.nodeComp}>
          <Switch>
            <Route exact path="/"><Redirect to="/account" /></Route>
            <Route path="/account"><Account callbackFunc={this.callbackFunc} /></Route>
          </Switch>
        </BaseLayout>
      </Router>
    )
  }
}

export default AppRouter;
