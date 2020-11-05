import React from 'react';

import AccountRender from './render';
import HeaderFunc from './headerFunc';

interface Props {
  callbackFunc: Function;
}
interface State {
  reload: boolean;
}

class Account extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      reload: false
    }
    this.props.callbackFunc(<HeaderFunc reload={this.reload} />);
  }
  reload = (reload: boolean) => {
    this.setState({
      reload: reload
    })
  }
  render() {
    return (
      <AccountRender reload={this.reload} isReload={this.state.reload} />
    )
  }
}

export default Account;
