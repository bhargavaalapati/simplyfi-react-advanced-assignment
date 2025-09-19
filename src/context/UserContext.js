// src/context/UserContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import EditModal from '../components/EditModal';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const showEditModal = (user) => {
    setEditingUser(user);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingUser(null);
  };

  const handleUpdate = (userId, updatedValues) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, ...updatedValues } : user
    ));
    handleCancel();
  };
  
  const value = {
    users,
    loading,
    handleDelete,
    showEditModal
  };

  return (
    <UserContext.Provider value={value}>
      {children}
      {editingUser && (
        <EditModal
          visible={isModalVisible}
          onCancel={handleCancel}
          onUpdate={handleUpdate}
          user={editingUser}
        />
      )}
    </UserContext.Provider>
  );
};