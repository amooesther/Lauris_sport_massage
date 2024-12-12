import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useUser } from '../Context/UserContext'; // Import useUser
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Login = () => {
  const { setUser, setUserRole } = useUser(); // Access setUser and setUserRole from context
  const navigate = useNavigate(); // For redirecting
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const notify = (message, type = 'success') => {
    if (type === 'success') toast.success(message);
    else toast.error(message);
  };

  const handleAuth = async () => {
    if (!email || !password) {
      notify('Please fill in all fields', 'error');
      return;
    }

    try {
      let userCredential;

      if (isSignUp) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        notify('Account created successfully!');
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
        notify('Logged in successfully!');
      }

      // Set user in context
      setUser(userCredential.user);

      // Fetch user role from Firestore after login
      const userRef = doc(db, 'users', userCredential.user.uid);
      const userDoc = await getDoc(userRef);
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUserRole(userData.role); // Set user role in context

        // Redirect based on user role
        if (userData.role === 'admin') {
          navigate('/admin'); // Redirect to admin dashboard
        } else {
          navigate('/'); // Redirect to home page
        }
      } else {
        notify('User data not found!', 'error');
        setUser(null);
        setUserRole(null);
      }
    } catch (error) {
      notify(error.message, 'error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">{isSignUp ? 'Sign Up' : 'Login'}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-md mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-md mb-3"
        />
        <button onClick={handleAuth} className="w-full bg-blue-500 text-white py-2 rounded-md">
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
        <p onClick={() => setIsSignUp(!isSignUp)} className="text-sm text-blue-500 mt-4 cursor-pointer">
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default Login;
