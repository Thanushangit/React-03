import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const Rootlayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This will render child routes */}
    </div>
  );
};

export default Rootlayout;
