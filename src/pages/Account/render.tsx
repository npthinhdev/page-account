import React from 'react';
import { Table, Tag, Space, Button, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, UserAddOutlined } from '@ant-design/icons';

import * as Services from '../../services';
import UserForm from './form';

interface PropsAccount { }
interface StateAccount {
  accounts: Array<Object>,
  loading: boolean
}

interface PropsHeaderFunc { }
interface StateHeaderFunc {
  visible: boolean,
  loading: boolean
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

const accountColumns = [
  {
    title: 'User ID',
    dataIndex: 'userName',
    key: 'userName'
  },
  {
    title: 'First name',
    dataIndex: 'firstName',
    key: 'firstName'
  },
  {
    title: 'Last name',
    dataIndex: 'lastName',
    key: 'lastName'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: number) => {
      let color;
      let value;
      switch (status) {
        case 1:
          color = "green";
          value = "active";
          break;
        case 0:
          color = "red";
          value = "inactive"
          break;
        default:
          color = "black";
          value = "unknown";
      }
      return (
        <Tag color={color} key={value}>
          {value.toUpperCase()}
        </Tag>
      )
    }
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role'
  },
  {
    title: 'Domain',
    dataIndex: 'domain',
    key: 'domain'
  },
  {
    title: 'Actions',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button icon={<EditOutlined />} title="Edit"></Button>
        <Button icon={<DeleteOutlined />} danger title="Delete"></Button>
      </Space>
    )
  }
];

class AccountRender extends React.PureComponent<PropsAccount, StateAccount> {
  constructor(props: PropsAccount) {
    super(props);
    this.state = {
      accounts: [],
      loading: false
    }
  }
  getAllUsers() {
    this.setState({ loading: true });
    Services.getUsers()
      .then(resp => {
        this.setState({
          accounts: resp
        })
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
  componentDidMount() {
    this.getAllUsers();
  }
  render() {
    return (
      <Table
        rowKey="id"
        columns={accountColumns}
        dataSource={this.state.accounts}
        loading={this.state.loading}
        bordered
      />
    )
  }
}

export { AccountRender, HeaderFunc }
