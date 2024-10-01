import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">User System</h2>
            <p className="text-sm mt-1">
              © {new Date().getFullYear()} User System All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link to={"/adduser"} className="hover:text-blue-400 transition-colors duration-200">Add User</Link>
            <Link to={"/viewusers"} className="hover:text-blue-400 transition-colors duration-200">View Users</Link>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
