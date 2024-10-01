import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from "../redux/userSlice"; 
import { UserPen, User, Eye } from "lucide-react";
import { toast } from 'react-toastify';

export const AddUser = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userData));
    
    setUserData({ username: '', password: '', email: '' });
    toast.success("User added")
  };

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="flex justify-center max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="mb-8">
                <h3 className="text-gray-800 text-3xl font-extrabold">Add User</h3>
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block" htmlFor="username">
                  User name
                </label>
                <div className="relative flex items-center">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={userData.username}
                    onChange={handleChange}
                    required
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                    placeholder="Enter user name"
                  />
                  <User className='w-[18px] h-[18px] absolute right-4 cursor-pointer' />
                </div>
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block" htmlFor="password">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={userData.password}
                    onChange={handleChange}
                    required
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                    placeholder="Enter password"
                  />
                  <Eye className='w-[18px] h-[18px] absolute right-4 cursor-pointer' />
                </div>
              </div>
              <label className="text-gray-800 text-sm mb-2 block" htmlFor="email">
                Email
              </label>
              <div className="relative flex items-center">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={userData.email}
                  onChange={handleChange}
                  required
                  className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                  placeholder="Enter email"
                />
                <UserPen className='w-[18px] h-[18px] absolute right-4 cursor-pointer' />
              </div>

              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

