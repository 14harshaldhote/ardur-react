import React from 'react'
import List from './List';
import Section from './Section';
import Comments from './Commnets';

const Dashboard = () => {
  return (
    <div>
      <Section/>
      <Comments/>
      <List/>
    </div>
  )
}

export default Dashboard;