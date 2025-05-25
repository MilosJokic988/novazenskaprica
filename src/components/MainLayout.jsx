import React from 'react';
import Header from './Header';

import { Outlet } from 'react-router-dom';


const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      
    </div>
  );
};

export default MainLayout;
