import React, { useState } from 'react';
import { Card, Form, Typography } from 'antd';
import { 
  MailOutlined, 
  PhoneOutlined, 
  GlobalOutlined, 
  HeartOutlined,
  HeartFilled,
  EditOutlined, 
  DeleteOutlined 
} from '@ant-design/icons';
import { useUserContext } from '../context/UserContext';

const { Text } = Typography;

const UserCard = ({ user }) => {
  const [liked, setLiked] = useState(false);
  const { handleDelete, showEditModal } = useUserContext();
  
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;
  const iconAndTextColor = '#000000A6';

  return (
    <Card
      style={{ 
        borderRadius: '4px',
        border: '1px solid #f0f0f0',
        width: '309.73px',
        height: '100%',
      }}
      cover={
        <div style={{ 
          height: '200px',
          backgroundColor: '#f5f5f5',
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          width: '309.73px'
        }}>
          <img
            alt={user.name}
            src={avatarUrl}
            style={{ 
              width: '200px',
              height: '200px',
              borderRadius: '4px',
              objectFit: 'cover' 
            }} 
          />
        </div>
      }
      actions={[
        liked 
          ? <HeartFilled key="like" style={{ color: 'red', fontSize: '18px' }} onClick={() => setLiked(!liked)} /> 
          : <HeartOutlined key="like" style={{ color: iconAndTextColor, fontSize: '18px' }} onClick={() => setLiked(!liked)} />,
        <EditOutlined key="edit" style={{ color: iconAndTextColor, fontSize: '18px' }} onClick={() => showEditModal(user)} />,
        <DeleteOutlined key="delete" style={{ color: iconAndTextColor, fontSize: '18px' }} onClick={() => handleDelete(user.id)} />,
      ]}
    >
      <Form layout="vertical">
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>{user.name}</h3>
        <Form.Item style={{ margin: '5px 0' }}>
          <Text style={{ color: iconAndTextColor }}>
            <MailOutlined style={{ marginRight: '10px' }} /> 
            {user.email}
          </Text>
        </Form.Item>
        <Form.Item style={{ margin: '5px 0' }}>
          <Text style={{ color: iconAndTextColor }}>
            <PhoneOutlined style={{ marginRight: '10px' }} /> 
            {user.phone}
          </Text>
        </Form.Item>
        <Form.Item style={{ margin: '5px 0' }}>
          <Text style={{ color: iconAndTextColor }}>
            <GlobalOutlined style={{ marginRight: '10px' }} /> 
            http://{user.website}
          </Text>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default UserCard;