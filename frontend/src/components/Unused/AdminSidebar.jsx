import React from 'react';

function AdminSidebar() {
  return (
    <div className="w-64 h-screen bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
      <ul className="space-y-2">
        <li>Dashboard</li>
        <li>Manage Users</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
