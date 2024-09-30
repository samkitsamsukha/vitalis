'use client';
import React, { useState } from 'react';
import { loginWithGoogle, loginWithEmailPassword } from 'C:/Coding/Vitalis/vitalis/firebaseConfig.js'; // Import login functions

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState('patient'); // Default login type

  // Function to handle login with email and password
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await loginWithEmailPassword(email, password);
      console.log('Login successful:', result);
      // Handle successful login logic here
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure logic here
    }
  };

  // Function to handle login with Google
  const handleGoogleLogin = async () => {
    try {
      const result = await loginWithGoogle();
      console.log('Google login successful:', result);
      // Handle successful login logic here
    } catch (error) {
      console.error('Google login failed:', error);
      // Handle Google login failure logic here
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-4xl text-teal-600 font-bold mb-6">LOGIN</h2>
        <form onSubmit={handleLogin}>
          {/* Dropdown for Login Type */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Login Type:
            </label>
            <select
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={loginType}
              onChange={(e) => setLoginType(e.target.value)}
            >
              <option value="patient">Patient Login</option>
              <option value="doctor">Doctor Login</option>
            </select>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address:
            </label>
            <div className="relative">
              <input
                type="email"
                className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johndoe@email.com"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="***********"
                required
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13.875 18.825C15.628 18.003 17.62 16.857 19.636 14.976c2.04-1.896 3.313-3.73 3.607-4.476-.294-.746-1.567-2.58-3.607-4.476-2.015-1.881-4.008-3.027-5.761-3.849C12.933 1.442 12.24 1 11.5 1c-.739 0-1.433.442-2.175 1.175-1.753.822-3.745 1.968-5.761 3.849C1.524 7.92.251 9.754-.043 10.5c.294.746 1.567 2.58 3.607 4.476 2.016 1.881 4.008 3.027 5.761 3.849C10.067 18.558 10.76 19 11.5 19c.739 0 1.433-.442 2.175-1.175.676-.453 1.319-.95 1.875-1.825z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12l1-1m2-2l1-1m-7 5l1-1M9 12l1-1M7 10l1-1" />
                  </svg>
                )}
              </span>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-between items-center mb-6">
            <a href="#" className="text-sm text-teal-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>

          {/* Login with Google Button */}
          <button
            type="button"
            className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleGoogleLogin}
          >
            Login with Google
          </button>

          {/* Signup Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don’t have an account? <a href="#" className="text-teal-600 hover:underline">Sign up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
