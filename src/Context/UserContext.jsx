import React, { createContext, useState, useEffect, useContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { db } from '../firebase'; // Ensure you import your Firestore instance
import { doc, getDoc } from 'firebase/firestore';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState('');
  const [loading, setLoading] = useState(true); // To handle loading state while fetching role

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        
        try {
          // Fetch the user's role from Firestore (assuming the user's role is stored in a 'users' collection)
          const userRef = doc(db, 'users', currentUser.uid);
          const docSnapshot = await getDoc(userRef);
          
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            setUserRole(userData.role || ''); // Set the role, default to empty if not found
          } else {
            setUserRole(''); // Handle case if user data doesn't exist
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
          setUserRole(''); // Fallback to empty role on error
        }
      } else {
        setUser(null);
        setUserRole('');
      }
      setLoading(false); // Finish loading state after auth and role fetching
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Return a loading message while waiting for the user's data and role to be fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <UserContext.Provider value={{ user, setUser, userRole, setUserRole }}>
      {children}
    </UserContext.Provider>
  );
};
