import React from 'react';

import { AccountRender, HeaderFunc } from './render';

interface Props {
  callbackFunc: Function
};

class Account extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.props.callbackFunc(<HeaderFunc />);
  }
  render() {
    return (
      <AccountRender />
    )
  }
}

export default Account;
