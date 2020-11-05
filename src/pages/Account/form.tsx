import React from 'react';
import { Form, Input, Select, Radio } from 'antd';
import { FormInstance } from 'antd/lib/form';

interface PropForm {
  onCreate: Function;
}

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
}

class UserForm extends React.PureComponent<PropForm> {
  formRef = React.createRef<FormInstance>();
  onFinish = (values: any) => {
    this.props.onCreate(values)
  }
  onFinishFailed = (error: any) => {
    console.log("Failed:", error);
  }
  render() {
    return (
      <Form {...layout} ref={this.formRef} name="formUser" className="form-user" onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
        <Form.Item name="userName" label="User ID" rules={[{ required: true, message: "This is required" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Name" className="form-user__name">
          <Form.Item name="firstName" className="form-user__name--first">
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item name="lastName" className="form-user__name--last">
            <Input placeholder="Last Name" />
          </Form.Item>
        </Form.Item>
        <Form.Item name="status" label="Status" initialValue={1}>
          <Select>
            <Option value={1}>Active</Option>
            <Option value={0}>Inactive</Option>
          </Select>
        </Form.Item>
        <Form.Item name="role" label="Role" initialValue="Admin">
          <Radio.Group>
            <Radio value="Admin">Admin</Radio>
            <Radio value="User">User</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="domain" label="Domain" initialValue="Global">
          <Select>
            <Option value="Global">Global</Option>
            <Option value="Pikachu">Pikachu</Option>
          </Select>
        </Form.Item>
      </Form>
    )
  }
}

export default UserForm;
