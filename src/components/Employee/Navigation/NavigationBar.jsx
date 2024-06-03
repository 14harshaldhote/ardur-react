import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import Login from '../Auth/Login';

function NavigationBar() {
  const [showModal, setShowModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, []);

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
    localStorage.setItem('username', username);
    setShowModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('username');
    setShowAvatarMenu(false);
  };

  const toggleAvatarMenu = () => {
    setShowAvatarMenu(!showAvatarMenu);
  };

  const handleFastAppClick = () => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      handleOpenModal();
    }
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleSupportClick = () => {
    // Handle support click here
  };

  const isFastAppPage = location.pathname === '/dashboard';
  const isAppraisalPage = location.pathname === '/appraisal'; // Adjust this path based on your route setup

  return (
    <div className="relative z-50">
      <div className='flex justify-between items-center w-full bg-cyan-900/50 p-4'>
        <div className='flex items-center'>
          <img src={logo} className='w-24 h-auto md:w-48' alt="Logo" />
        </div>

        <div className='hidden md:flex items-center space-x-4 font-semibold'>
          <a href="#" className={`text-white ${isFastAppPage || isAppraisalPage ? 'opacity-50 cursor-not-allowed' : 'hover:text-slate-300'}`} onClick={handleFastAppClick} disabled={isFastAppPage || isAppraisalPage}>FastApp</a>
          <a href="#" className={`text-white ${isFastAppPage || isAppraisalPage ? 'opacity-50 cursor-not-allowed' : 'hover:text-slate-300'}`} onClick={handleOpenModal} disabled={isFastAppPage || isAppraisalPage}>Appraisal</a>
          {isLoggedIn ? (
            <div className="relative">
              <div 
                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold cursor-pointer"
                onClick={toggleAvatarMenu}
              >
                {username.charAt(0)}
              </div>
              {showAvatarMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  <div className="px-4 font-light py-2 text-gray-800">
                    {username}
                  </div>
                  <button 
                    className="w-full text-left px-4 py-2 text-center font-semibold text-gray-800 hover:bg-gray-200"
                    onClick={handleHomeClick}
                  >
                    Home
                  </button>
                  <button 
                    className="w-full text-left px-4 py-2 text-center font-semibold text-gray-800 hover:bg-gray-200"
                    onClick={handleSupportClick}
                  >
                    Support
                  </button>
                  <button 
                    className={`w-full text-left px-4 py-2 text-center font-semibold text-gray-800 ${isFastAppPage || isAppraisalPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                    onClick={handleLogout}
                    disabled={isFastAppPage || isAppraisalPage}
                  >
                    Logout
                  </button>
                </div>
              )}
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
        <a href="#" className={`block text-white ${isFastAppPage || isAppraisalPage ? 'opacity-50 cursor-not-allowed' : 'hover:text-slate-300 mb-2'}`} onClick={handleFastAppClick} disabled={isFastAppPage || isAppraisalPage}>FastApp</a>
        <a href="#" className={`block text-white ${isFastAppPage || isAppraisalPage ? 'opacity-50 cursor-not-allowed' : 'hover:text-slate-300 mb-2'}`} onClick={handleOpenModal} disabled={isFastAppPage || isAppraisalPage}>Appraisal</a>
        {isLoggedIn ? (
          <div className="relative">
            <div 
              className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold cursor-pointer"
              onClick={toggleAvatarMenu}
            >
              {username.charAt(0)}
            </div>
            {showAvatarMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                <div className="px-4 py-2 text-gray-800">
                  {username}
                </div>
                <button 
                  className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={handleHomeClick}
                >
                  Home
                </button>
                <button 
                  className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={handleSupportClick}
                >
                  Support
                </button>
                <button 
                  className={`w-full text-left px-4 py-2 text-gray-800 ${isFastAppPage || isAppraisalPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                  onClick={handleLogout}
                  disabled={isFastAppPage || isAppraisalPage}
                >
                  Logout
                </button>
              </div>
            )}
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
