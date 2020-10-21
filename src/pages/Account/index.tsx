import React from 'react';
import { Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

import AccountRender from './render';

interface Props {
  callbackFunc: Function
};

const HeaderFunc: React.FC = () => {
  return (
    <Button
      type="primary"
      shape="circle"
      icon={<UserAddOutlined />}
    />
  )
}

class Account extends React.Component<Props> {
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
