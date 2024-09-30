"use client";
import React, { useState } from "react";
import { loginWithGoogle, loginWithEmailPassword } from "../../firebaseConfig";
import Image from "next/image";
import closeye from './assets/closeye.png'
import openeye from './assets/openeye.png'

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [loginType, setLoginType] = useState("patient"); // Default login type

	// Function to handle login with email and password
	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const result = await loginWithEmailPassword(email, password);
			console.log("Login successful:", result);
			// Handle successful login logic here
		} catch (error) {
			console.error("Login failed:", error);
			// Handle login failure logic here
		}
	};

	// Function to handle login with Google
	const handleGoogleLogin = async () => {
		try {
			const result = await loginWithGoogle();
			console.log("Google login successful:", result);
			// Handle successful login logic here
		} catch (error) {
			console.error("Google login failed:", error);
			// Handle Google login failure logic here
		}
	};

	return (
		<div className="pt-[3vh] flex justify-center items-center min-h-screen bg-blue-50">
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
								type={showPassword ? "text" : "password"}
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
                  <Image src={closeye} alt="hide password" className="w-6 h-6 opacity-50"/>
								) : (
                  <Image src={openeye} alt="show password" className="w-6 h-6 opacity-50"/>
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
						className="w-full bg-teal-600 hover:bg-teal-700 transition ease-in-out duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Login
					</button>

					{/* Login with Google Button */}
					<button
						type="button"
						className=" mt-6 w-full bg-gray-100 hover:bg-gray-200 transition duration-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-300 flex flex-row justify-center items-center space-x-4"
						onClick={handleGoogleLogin}
					>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="36"
								height="36"
								viewBox="0 0 48 48"
							>
								<path
									fill="#FFC107"
									d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
								></path>
								<path
									fill="#FF3D00"
									d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
								></path>
								<path
									fill="#4CAF50"
									d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
								></path>
								<path
									fill="#1976D2"
									d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
								></path>
							</svg>
						</div>
						<div>Login with Google</div>
					</button>

					{/* Signup Link */}
					<div className="text-center mt-4">
						<p className="text-sm text-gray-600">
							Don’t have an account?{" "}
							<a href="#" className="text-teal-600 hover:underline">
								Sign up
							</a>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
