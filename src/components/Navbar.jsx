import React, { useState } from 'react';
import { Menu,  X } from 'lucide-react';
import { Pen, Eye} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isuser=true

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
          {isuser?"Welcome User":"User System"}
            </Link>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to={"/adduser"} className="text-gray-800 hover:text-blue-600 flex items-center space-x-1">
                <Pen className="w-5 h-5" />
                <span>Add User</span>
              </Link>
              <Link to={"/viewusers"}  className="text-gray-800 hover:text-blue-600 flex items-center space-x-1">
                <Eye className="w-5 h-5" />
                <span>View Users</span>
              </Link>
            
             
           
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to={"/adduser"}  className="text-gray-800 hover:text-blue-600 flex items-center space-x-1">
              <Pen className="w-5 h-5" />
              <span>Add Users</span>
            </Link>
            <Link to={"/viewusers"} className="text-gray-800 hover:text-blue-600 flex items-center space-x-1">
              <Eye className="w-5 h-5" />
              <span>View Users</span>
            </Link>
           
        
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
