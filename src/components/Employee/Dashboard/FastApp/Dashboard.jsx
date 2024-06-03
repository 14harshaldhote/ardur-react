import React, { useState } from 'react';
import List from './List';
import Section from './Section';
import Comments from './Comments';
import Checks from './Checks';
import CompareSection from './CompareSection';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Dashboard = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f5f5f5', position: 'relative' }}>
      <div style={{ width: '20%', padding: '20px', background: '#f0f0f0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Section />
        <Checks />
        <Comments />
      </div>
      <div 
        className={`content-container ${isListVisible ? 'visible' : 'hidden'}`} 
        style={{ width: '80%', padding: '20px', transition: 'transform 0.5s ease' }}
      >
        <CompareSection />
        <List />
      </div>
      <div 
        className={`arrow-container`} 
        style={{ 
          position: 'absolute', 
          top: '50%', 
          right: isListVisible ? 'calc(80% + 20px)' : '20px', 
          transform: 'translateY(-50%)', 
          cursor: 'pointer', 
          zIndex: 1000, 
          transition: 'right 0.5s ease' 
        }} 
        onClick={toggleListVisibility}
      >
        <ArrowBackIosNewIcon 
          style={{ 
            fontSize: '24px', 
            transform: isListVisible ? 'rotate(180deg)' : 'rotate(0deg)', 
            transition: 'transform 0.5s ease' 
          }}  
          className='text-xl shadow-2xl hover:bg-slate-500 rounded-full -my-3 '
        />
      </div>
      <style jsx>{`
        .content-container.hidden {
          transform: translateX(100%);
        }
        .content-container.visible {
          transform: translateX(0);
        }
        .arrow-container {
          transition: right 0.5s ease;
        }
      `}</style>
    </div>
  );
}

export default Dashboard;
