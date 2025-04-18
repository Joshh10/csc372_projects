import React, { useEffect, useState } from 'react'
import '../../App.css'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  
  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate('/login');
  };
  
    return (
      <div className="form">
          <h3>Dashboard</h3>
          <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
  
  
export default Dashboard;