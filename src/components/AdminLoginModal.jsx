// src/components/AdminLoginModal.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';

const AdminLoginModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', {
        username,
        password
      });
      console.log('Login successful:', response.data);
      onClose(); // Close modal on successful login
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <motion.div
        className="bg-white rounded-lg p-6 w-96 shadow-lg"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.7 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Tradophile</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <FaUser className="text-gray-600 mr-2" />
              <label className="text-sm font-medium text-black">Username</label>
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
          </div>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <FaLock className="text-gray-600 mr-2" />
              <label className="text-sm font-medium text-black">Password</label>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-gray-500 hover:text-gray-700">
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default AdminLoginModal;
