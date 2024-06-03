import React from 'react';
import List from './List';
import Section from './Section';
import Comments from './Comments';
import Checks from './Checks';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f5f5f5' }}>
      <div style={{ width: '20%', padding: '20px', background: '#f0f0f0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Section />
        <Checks />
        <Comments />
      </div>
      <div style={{ width: '80%', padding: '20px' }}>
        <List />
      </div>
    </div>
  );
}

export default Dashboard;
