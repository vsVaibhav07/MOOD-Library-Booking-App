import React from 'react';

function UserSidebar() {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">User Menu</h2>
      <ul className="space-y-2">
        <li>Dashboard</li>
        <li>Profile</li>
        <li>Documents</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default UserSidebar;
