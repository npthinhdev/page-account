import React from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface Props { };
interface State {
  accounts: [],
  loading: boolean
};

const columns = [
  {
    title: 'User ID',
    dataIndex: 'userID',
    key: 'userID'
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
    render: (status: string) => {
      let color;
      switch (status.toLocaleLowerCase()) {
        case "active":
          color = "green";
          break;
        case "inactive":
          color = "red";
          break;
        default:
          color = "black";
      }
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
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

class AccountRender extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      accounts: [],
      loading: false
    }
  }
  componentDidMount() {
    this.setState({ loading: true });
    let url = "http://localhost:3001/accounts";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          accounts: data,
          loading: false
        })
      })
  }
  render() {
    return (
      <Table
        columns={columns}
        dataSource={this.state.accounts}
        loading={this.state.loading}
        bordered
      />
    )
  }
}

export default AccountRender
