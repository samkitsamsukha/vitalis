"use client";
import React, { useState } from "react";
import {
	signUpWithEmailPassword,
	signUpWithGoogle,
} from "../../firebaseConfig";
import Image from "next/image";
import closeye from '../login/assets/closeye.png'
import openeye from '../login/assets/openeye.png'

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [accountType, setAccountType] = useState("patient");
	const [showPassword, setShowPassword] = useState(false);

	// Handle Email/Password SignUp
	const handleSignup = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match!");
			return;
		}
		try {
			await signUpWithEmailPassword(email, password);
			alert("Sign up successful!");
		} catch (error) {
			console.error("Error signing up with email:", error);
			alert(error.message);
		}
	};

	// Handle Google SignUp
	const handleGoogleSignup = async () => {
		try {
			await signUpWithGoogle();
			alert("Sign up with Google successful!");
		} catch (error) {
			console.error("Error signing up with Google:", error);
			alert(error.message);
		}
	};

	return (
		<div className="pt-[3vh] flex justify-center items-center min-h-screen bg-blue-50">
			<div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
				<h2 className="text-4xl text-teal-600 font-bold mb-6">SIGN UP</h2>
				<form onSubmit={handleSignup}>
					{/* Name Input */}
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Name:
						</label>
						<input
							type="text"
							className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="John Doe"
							required
						/>
					</div>

					{/* Account Type Dropdown */}
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Account Type:
						</label>
						<select
							className="border border-gray-300 bg-white rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
							value={accountType}
							onChange={(e) => setAccountType(e.target.value)}
						>
							<option value="patient">Patient</option>
							<option value="doctor">Doctor</option>
						</select>
					</div>

					{/* Email Input */}
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Email Address:
						</label>
						<input
							type="email"
							className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="johndoe@email.com"
							required
						/>
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

					{/* Confirm Password Input */}
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Confirm Password:
						</label>
						<div className="relative">
							<input
								type={showPassword ? "text" : "password"}
								className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
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

					{/* Signup Button */}
					<button
						type="submit"
						className="w-full bg-teal-600 transition ease-in-out duration-300 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
					>
						Sign Up
					</button>
				</form>

				{/* Google Sign Up Button */}
				<div className="mt-6">
					<button
						onClick={handleGoogleSignup}
						className="w-full bg-gray-100 hover:bg-gray-200 transition duration-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-300 flex flex-row justify-center items-center space-x-4"
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
						<div>Sign Up with Google</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Signup;
