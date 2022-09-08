import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginCustomer from './components/LoginCustomer';
import Home from './components/Home';
import LoginBusiness from './components/LoginBusiness';
import HomepageBusiness from './components/business/HomepageBusiness';
import AdminDashboard from './components/business/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-customer" element={<LoginCustomer />} />
          <Route path="/login-business" element={<LoginBusiness />} />
          <Route path="/homepage-business" element={<HomepageBusiness />} />

          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          
        </Routes>
        
      
      
      </div>
    </Router>
  );
}

export default App;
