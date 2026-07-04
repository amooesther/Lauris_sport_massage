import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { useUser } from '../Context/UserContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, getDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { FaLock, FaEnvelope, FaUser, FaArrowLeft } from 'react-icons/fa';

const Login = () => {
  const { setUser, setUserRole } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!email || !password || (isSignUp && !username)) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      let userCredential;

      if (isSignUp) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        toast.success('Account created successfully!');

        // Add user data to Firestore after sign-up
        const userRef = doc(db, 'users', userCredential.user.uid);
        await setDoc(userRef, {
          email: email,
          username: username,
          createdAt: Timestamp.fromDate(new Date()),
          role: 'user',
        });
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
        toast.success('Logged in successfully!');
      }

      setUser(userCredential.user);

      // Fetch user role from Firestore after login
      const userRef = doc(db, 'users', userCredential.user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUserRole(userData.role);

        if (userData.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        toast.error('User data not found!');
        setUser(null);
        setUserRole(null);
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (!resetEmail) {
      toast.error('Please enter your email address');
      return;
    }
    
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      toast.success('Password reset email sent!');
      setShowForgotPassword(false);
    } catch (error) {
      console.error('Error resetting password:', error);
      toast.error('Error sending reset email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-soft-neutral py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-gray-150 shadow-premium space-y-6">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-navy-dark">
            {showForgotPassword ? 'Reset Password' : isSignUp ? 'Create Account' : 'Portal Sign In'}
          </h2>
          <p className="text-xs text-slate-neutral mt-2">
            {showForgotPassword 
              ? 'Enter your registered email to receive reset instructions.' 
              : isSignUp 
                ? 'Join LauraPhys Wellness to manage your appointments.' 
                : 'Sign in to access your appointments and schedules.'}
          </p>
        </div>

        {showForgotPassword ? (
          /* Forgot Password Form */
          <form onSubmit={handlePasswordReset} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-navy-dark">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                  <FaEnvelope className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full border border-gray-250 pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-navy-dark hover:bg-secondary text-white hover:text-navy-dark font-bold py-3.5 rounded-xl shadow-md transition-all duration-300 disabled:opacity-50 text-sm"
            >
              {loading ? 'Sending...' : 'Send Password Reset Email'}
            </button>

            <button
              type="button"
              onClick={() => setShowForgotPassword(false)}
              className="w-full flex items-center justify-center gap-1.5 text-xs text-slate-neutral hover:text-navy-dark transition-colors pt-2"
            >
              <FaArrowLeft /> Back to Login
            </button>
          </form>
        ) : (
          /* Sign In / Sign Up Form */
          <form onSubmit={handleAuth} className="space-y-4">
            {isSignUp && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-navy-dark">Username</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                    <FaUser className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. johndoe"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full border border-gray-250 pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-bold text-navy-dark">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                  <FaEnvelope className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-250 pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-navy-dark">Password</label>
                {!isSignUp && (
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-xs text-secondary hover:underline"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                  <FaLock className="w-4 h-4" />
                </span>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-250 pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-navy-dark hover:bg-secondary text-white hover:text-navy-dark font-bold py-3.5 rounded-xl shadow-md transition-all duration-300 disabled:opacity-50 text-[15px]"
            >
              {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Log In'}
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-xs text-slate-neutral hover:text-navy-dark transition-colors"
              >
                {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

export default Login;
