import React from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import * as Services from '../../services';

interface PropsAccount {
  reload: Function;
  isReload: boolean;
}
interface StateAccount {
  accounts: Array<Object>;
  loading: boolean;
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
  componentDidUpdate() {
    if (this.props.isReload) {
      this.getAllUsers();
      this.props.reload(false);
    }
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

export default AccountRender;
