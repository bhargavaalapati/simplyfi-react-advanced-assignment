import React, { useEffect } from 'react';
import { Modal, Form, Input } from 'antd';

// This component receives props to control its visibility, handle actions, and get the user data
const EditModal = ({ visible, onCancel, onUpdate, user }) => {
  const [form] = Form.useForm();

  // Use useEffect to pre-fill the form whenever the 'user' prop changes
  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        name: user.name,
        email: user.email,
        phone: user.phone,
        website: user.website,
      });
    }
  }, [user, form]);

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        form.resetFields();
        // Call the onUpdate function passed from App.js with the user's id and new values
        onUpdate(user.id, values);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      title="Edit User"
      visible={visible}
      onOk={handleOk}
      onCancel={onCancel}
      okText="Save"
    >
      <Form form={form} layout="vertical" name="edit_user_form">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input the name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input the email!', type: 'email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: 'Please input the phone number!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="website"
          label="Website"
          rules={[{ required: true, message: 'Please input the website!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;