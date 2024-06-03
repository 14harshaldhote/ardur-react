import React, { useState } from 'react';
import List from './List';
import Section from './Section';
import Comments from './Comments';
import Checks from './Checks';
import CompareSection from './CompareSection';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ProgressBar from './ProgressBar';

const Dashboard = () => {
  const [isListVisible, setIsListVisible] = useState(true);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  const handleRowClick = () => {
    setIsListVisible(false);
    // Handle the data opening in CompareSection here
  };

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f5f5f5', position: 'relative' }}>
      <div style={{ width: '20%', padding: '20px', background: '#f0f0f0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Section disabled={isListVisible} />
        <Checks disabled={isListVisible} />
        <Comments disabled={isListVisible} />
      </div>
      <div style={{ width: '80%', padding: '20px' }}>
        <div>
          <ProgressBar/>
        </div>
        <CompareSection />
      </div>
      <div 
        className={`list-container ${isListVisible ? 'visible' : 'hidden'}`} 
        style={{ 
          position: 'absolute', 
          top: '0', 
          right: '0', 
          height: '100%', 
          width: '80%', 
          backgroundColor: '#fff', 
          transition: 'transform 0.5s ease', 
          boxShadow: '-2px 0 5px rgba(0,0,0,0.1)' 
        }}
      >
        <List onRowClick={handleRowClick} />
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
        .list-container.hidden {
          transform: translateX(100%);
        }
        .list-container.visible {
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
