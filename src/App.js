// src/App.js
import React from 'react';
import { Row, Col } from 'antd';
import { UserProvider, useUserContext } from './context/UserContext';
import UserCard from './components/UserCard';
import Loader from './components/Loader';
import './App.css';

const UserList = () => {
  const { users, loading } = useUserContext();

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={[24, 24]}>
        {users.map(user => (
          <Col xs={24} sm={12} md={8} lg={6} key={user.id}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

function App() {
  return (
    <UserProvider>
      <UserList />
    </UserProvider>
  );
}

export default App;