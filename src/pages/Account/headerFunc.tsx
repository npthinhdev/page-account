import React from 'react';
import { Button, Modal } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

import * as Services from '../../services';
import UserForm from './form';

interface PropsHeaderFunc {
  reload: Function;
}
interface StateHeaderFunc {
  visible: boolean;
  loading: boolean;
}

class HeaderFunc extends React.PureComponent<PropsHeaderFunc, StateHeaderFunc> {
  constructor(props: PropsHeaderFunc) {
    super(props);
    this.state = {
      visible: false,
      loading: false
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    })
  }
  handleCancel = () => {
    this.setState({
      visible: false
    })
  }
  handleCreate = (values: any) => {
    this.setState({
      loading: true
    })
    Services.createUser(values)
      .then(() => {
        this.setState({
          visible: false
        })
        this.props.reload(true);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        this.setState({
          loading: false
        })
      })
  }
  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <Button
          type="primary"
          shape="circle"
          icon={<UserAddOutlined />}
          onClick={this.showModal}
          title="Add user"
        />
        <Modal
          title="Add user"
          visible={visible}
          onCancel={this.handleCancel}
          destroyOnClose={true}
          footer={[
            <Button key="cancel" onClick={this.handleCancel}>Cancel</Button>,
            <Button key="submit" type="primary" form="formUser" htmlType="submit" loading={loading}>Submit</Button>
          ]}
        >
          <UserForm onCreate={this.handleCreate} />
        </Modal>
      </>
    )
  }
}

export default HeaderFunc;
