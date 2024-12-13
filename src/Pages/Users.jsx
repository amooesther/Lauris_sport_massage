import React, { useEffect, useState } from 'react';
import { db, collection, getDocs } from '../firebase'; // Import Firestore utilities

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch all users from Firestore
        const usersCollection = collection(db, 'users');
        const userDocs = await getDocs(usersCollection);

        // Map the documents to extract user data
        const usersList = userDocs.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.username || 'Unknown User', // Default to 'Unknown User'
            email: data.email || 'N/A', // Default to 'N/A'
            role: data.role || 'N/A', // Default to 'N/A'
            createdAt: data.createdAt 
              ? data.createdAt.toDate().toLocaleDateString() 
              : 'Unknown', // Handle Firestore timestamp correctly
          };
        });

        setUsers(usersList);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array to run on component mount

  if (loading) {
    return <div className="text-center text-gray-600">Loading users...</div>;
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Users</h1>
      {users.length === 0 ? (
        <div className="text-center text-gray-500">No users found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-green-50 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border border-gray-200 p-6"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
              <p className="text-gray-600 text-sm mb-2">Email: <span className="font-medium">{user.email}</span></p>
              <p className="text-gray-600 text-sm mb-2">Role: <span className="font-medium">{user.role}</span></p>
              <p className="text-gray-600 text-sm">Joined: <span className="font-medium">{user.createdAt}</span></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
