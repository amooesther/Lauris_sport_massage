// src/components/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Login = ({ setUser, setUserRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async () => {
    try {
      let userCredential;
      if (isSignUp) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);

        // Assign default role (e.g., 'user') during sign-up
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          email: email,
          role: 'user', // Default role
        });

        toast.success('Account created successfully!');
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
        toast.success('Logged in successfully!');
      }

      // Fetch role from Firestore after login or sign-up
      const userRef = doc(db, 'users', userCredential.user.uid);
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUser(userCredential.user);
        setUserRole(userData.role); // Set the role in app state
      } else {
        toast.error('User data not found!');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">
          {isSignUp ? 'Sign Up' : 'Login'}
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAuth}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
        <p
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-sm text-blue-500 text-center mt-4 cursor-pointer"
        >
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default Login;
