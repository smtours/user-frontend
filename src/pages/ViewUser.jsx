import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Edit, Trash } from 'lucide-react';
import { fetchUsers, deleteUser } from '../redux/userSlice'; 
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);



  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
     toast.success("User deleted")
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-4">
      <div className="max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-4">User List</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="3" className="py-2 px-4 text-center">No users found.</td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b flex space-x-2">
                    <Link to={"/edituser/:id"} >
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit User"
                    >
                      <Edit size={20} />
                    </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete User"
                    >
                      <Trash size={20} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
