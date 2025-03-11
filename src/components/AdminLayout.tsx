// import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminNavbar } from './AdminNavbar';

export const AdminLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Admin Navbar */}
      <AdminNavbar />
      {/* Admin Pages */}
      <div className="flex-grow p-6">
        <Outlet /> {/* This will render the admin pages */}
      </div>
    </div>
  );
};
