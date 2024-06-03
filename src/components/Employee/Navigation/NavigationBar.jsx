import React, { useState } from 'react';
import logo from '../../../assets/images/logo.png';
import Login from '../Auth/Login';

function NavigationBar() {
  const [showModal, setShowModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLoginSuccess = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  return (
    <div className="relative z-50">
      <div className='flex justify-between items-center w-full bg-cyan-900/50 p-4'>
        <div className='flex items-center'>
          <img src={logo} className='w-24 h-auto md:w-48' alt="Logo" />
        </div>

        <div className='hidden md:flex items-center space-x-4 font-semibold'>
          <a href="#" className='text-white hover:text-slate-300' onClick={handleOpenModal}>FastApp</a>
          <a href="#" className='text-white hover:text-slate-300' onClick={handleOpenModal}>Appraisal</a>
          {isLoggedIn ? (
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              {username.charAt(0)}
            </div>
          ) : (
            <button 
              className='hover:bg-indigo-800 bg-blue-700 p-3 rounded-2xl text-lg text-white'
              onClick={handleOpenModal}
            >
              Login
            </button>
          )}
        </div>

        <div className='md:hidden'>
          <button onClick={toggleMobileMenu} className='text-white'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-y-0 right-0 w-64 bg-cyan-900/50 p-4 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <button onClick={toggleMobileMenu} className='text-white mb-4'>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <a href="#" className='block text-white hover:text-slate-300 mb-2' onClick={handleOpenModal}>FastApp</a>
        <a href="#" className='block text-white hover:text-slate-300 mb-2' onClick={handleOpenModal}>Appraisal</a>
        {isLoggedIn ? (
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            {username.charAt(0)}
          </div>
        ) : (
          <button 
            className='block w-full hover:bg-indigo-800 bg-blue-700 p-3 rounded-2xl text-lg text-white'
            onClick={handleOpenModal}
          >
            Login
          </button>
        )}
      </div>

      {showModal && <Login show={showModal} handleClose={handleCloseModal} handleLoginSuccess={handleLoginSuccess} />}
    </div>
  );
}

export default NavigationBar;
