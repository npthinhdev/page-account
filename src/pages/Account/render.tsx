import React from 'react';
import { Table, Tag, Space } from 'antd';

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
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    )
  }
];

const data = [
  {
    key: '1',
    userID: 'admin',
    firstName: '',
    lastName: '',
    status: 'Active',
    role: 'Admin',
    domain: 'Global'
  },
  {
    key: '2',
    userID: 'thinh',
    firstName: 'Thinh',
    lastName: 'Nguyen',
    status: 'Inactive',
    role: 'User',
    domain: 'Global'
  }
];

class AccountRender extends React.Component {
  render() {
    return (
      <Table columns={columns} dataSource={data} bordered />
    )
  }
}

export default AccountRender
