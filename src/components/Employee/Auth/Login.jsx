import React, { useState } from 'react';

const Login = ({ show, handleClose, handleLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const defaultUsername = 'AD1212';
  const defaultPassword = 'Ardur123';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === defaultUsername && password === defaultPassword) {
      handleLoginSuccess(username);
      handleClose();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${show ? '' : 'hidden'}`} onClick={handleClose}>
      <div className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-6 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-700/5 to-emerald-800/50 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/20 to-orange-400/4 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="relative z-10">
          <form onSubmit={handleSubmit}>
            <h3 className="text-2xl font-medium text-white text-center mb-6">Ardur Tech</h3>
            <label htmlFor="username" className="block text-white mb-2">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 mb-4 rounded bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label htmlFor="password" className="block text-white mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-4 rounded bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="w-full p-3 mt-4 bg-blue-500 rounded-3xl hover:bg-blue-600 text-lg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
