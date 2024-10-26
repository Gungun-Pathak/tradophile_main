// src/components/AdminDashboard.jsx
import React, { useState } from 'react';
import AdminLoginModal from './AdminLoginModal';
import BlogForm from './BlogForm';

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modalOpen, setModalOpen] = useState(true); // Control modal visibility

  const handleLogin = () => {
    setIsLoggedIn(true);
    setModalOpen(false); // Close modal on successful login
  };

  return (
    <div>
      <AdminLoginModal isOpen={modalOpen} onClose={handleLogin} />
      {isLoggedIn && <BlogForm />}
    </div>
  );
};

export default AdminDashboard;
