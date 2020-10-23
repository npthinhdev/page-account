import React from 'react';
import axios from 'axios';
import { Table, Tag, Space, Button, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, UserAddOutlined } from '@ant-design/icons';

interface PropsAccount { };
interface StateAccount {
  accounts: [],
  loading: boolean
};

interface PropsHeaderFunc { };
interface StateHeaderFunc {
  visible: boolean,
  loading: boolean
};

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
  handleOk = () => {
    this.setState({
      loading: true
    })
    setTimeout(() => {
      this.setState({
        visible: false,
        loading: false
      })
    }, 2000)
  }
  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
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
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="cancel" onClick={this.handleCancel}>Cancel</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>Submit</Button>
          ]}
        >
          <p>
            Username:
            <input type="text" /><br />
            First name:
            <input type="text" /><br />
            Last name:
            <input type="text" /><br />
            Status:
            <select name="" id="">
              <option value="">Active</option>
              <option value="">Inactive</option>
            </select>
          </p>
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
  apiHost: string;
  constructor(props: PropsAccount) {
    super(props);
    this.state = {
      accounts: [],
      loading: false
    }
    this.apiHost = "http://localhost:3001";
  }
  getAllUsers() {
    // let url = `http://192.168.98.217:9090/getAllUsers?pageSize=${5}&pageNo=${0}&sortBy=${"userName"}`;
    this.setState({ loading: true });
    axios.get(this.apiHost + "/accounts")
      .then(res => {
        this.setState({
          accounts: res.data,
          loading: false
        })
      })
      .catch(err => {
        console.log(err);
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
        columns={accountColumns}
        dataSource={this.state.accounts}
        loading={this.state.loading}
        bordered
      />
    )
  }
}

export { AccountRender, HeaderFunc }
