import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from '../components/Employee/Navigation/NavigationBar';
import Home from '../Pages/Employee/Home';
import Dashboard from '../components/Employee/Dashboard/FastApp/Dashboard';


const AppRoutes = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
