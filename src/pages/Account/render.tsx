import React from 'react';
import axios from 'axios';
import { Table, Tag, Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined, UserAddOutlined } from '@ant-design/icons';

interface Props { };
interface State {
  accounts: [],
  loading: boolean
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

const columns = [
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

class AccountRender extends React.Component<Props, State> {
  API_HOST: string;
  constructor(props: Props) {
    super(props);
    this.state = {
      accounts: [],
      loading: false
    }
    this.API_HOST = "http://localhost:3001";
  }
  getAllUsers() {
    // let url = `http://192.168.98.217:9090/getAllUsers?pageSize=${5}&pageNo=${0}&sortBy=${"userName"}`;
    axios.get(this.API_HOST + "/accounts")
      .then(res => {
        this.setState({
          accounts: res.data,
          loading: false
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  componentDidMount() {
    this.setState({ loading: true });
    this.getAllUsers();
    setTimeout(() => this.setState({ loading: false }), 10000);
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

export { AccountRender, HeaderFunc }
