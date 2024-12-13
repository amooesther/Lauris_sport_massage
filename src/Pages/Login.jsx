import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { useUser } from '../Context/UserContext'; // Import useUser
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, getDoc, Timestamp } from 'firebase/firestore'; // Import getDoc, setDoc, and Timestamp
import { db } from '../firebase';

const Login = () => {
  const { setUser, setUserRole } = useUser(); // Access setUser and setUserRole from context
  const navigate = useNavigate(); // For redirecting
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState(''); // Add state for username
  const [showForgotPassword, setShowForgotPassword] = useState(false); // State for showing the forgot password form
  const [resetEmail, setResetEmail] = useState(''); // Email for password reset

  const notify = (message, type = 'success') => {
    if (type === 'success') toast.success(message);
    else toast.error(message);
  };

  const handleAuth = async () => {
    if (!email || !password || (isSignUp && !username)) {
      notify('Please fill in all fields', 'error');
      return;
    }

    try {
      let userCredential;

      // Sign up or login flow
      if (isSignUp) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        notify('Account created successfully!');

        // Add user data to Firestore after sign-up
        const userRef = doc(db, 'users', userCredential.user.uid);
        await setDoc(userRef, {
          email: email,
          username: username, // Store the username
          createdAt: Timestamp.fromDate(new Date()), // Store createdAt as a timestamp
          role: 'user', // Default role, change based on your logic
        });
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
      console.error('Error during authentication:', error);
      notify(error.message, 'error');
    }
  };

  const handlePasswordReset = async () => {
    if (!resetEmail) {
      notify('Please enter your email address', 'error');
      return;
    }
    
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      notify('Password reset email sent!', 'success');
      setShowForgotPassword(false); // Hide the forgot password form
    } catch (error) {
      console.error('Error resetting password:', error);
      notify('Error sending reset email', 'error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">{isSignUp ? 'Sign Up' : 'Login'}</h2>

        {showForgotPassword ? (
          <div>
            <h3 className="text-xl font-semibold text-center mb-4">Reset Password</h3>
            <input
              type="email"
              placeholder="Enter your email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              className="w-full p-3 border rounded-md mb-3"
            />
            <button onClick={handlePasswordReset} className="w-full bg-blue-500 text-white py-2 rounded-md">
              Send Password Reset Email
            </button>
            <p onClick={() => setShowForgotPassword(false)} className="text-sm text-blue-500 mt-4 cursor-pointer">
              Back to Login
            </p>
          </div>
        ) : (
          <div>
            {isSignUp && (
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border rounded-md mb-3"
              />
            )}
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
            <p onClick={() => setShowForgotPassword(true)} className="text-sm text-blue-500 mt-4 cursor-pointer">
              Forgot Password?
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
