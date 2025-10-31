import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import logo from "../assets/kora.png"
function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword]= React.useState("");
    const[name, setName] = React.useState("");
    const[error, setError] = React.useState("");
    const navigate = useNavigate();
// 🔹 Dummy Users List
  const users = [
    { email: "admin@example.com", password: "1234", role: "admin" },
    { email: "employee@example.com", password: "1234", role: "employee" },
    { email: "customer@example.com", password: "1234", role: "customer" },
  ];


    const handleSubmit = (e) =>{
     e.preventDefault();
     //empty fields validation
         if (!name || !email || !password) {
    setError("Please fill in all fields");
    return; // stop further execution
  }

         // check if user exists in dummy list
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      // navigate based on role
      if (foundUser.role === "admin") {
        navigate("/admin-dashboard");
      } else if (foundUser.role === "employee") {
        navigate("/employee-dashboard");
      } else {
        navigate("/customer-home");
      }
    } else {
      setError("Invalid email or password");
    }
  };
      
 return (
    <div className="flex min-h-screen items-center justify-center bg-amber-100">
      {/* Login Box */}
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8 space-y-6">
        
        {/* Logo
        <div className="flex justify-center mb-4">
          <img src="/{logo}" alt="Kora" className="w-24 h-24" />
        </div> */}

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold">Sign in to your account</h2>
         {/* Error Message */}
        {error && (
          <p className="text-red-500 text-center font-medium">{error}</p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-sm font-medium text-gray-700">User Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

         <button
            type="submit"
            className="w-full bg-amber-700 text-white py-2 rounded-md font-semibold shadow-md hover:bg-amber-600 transition duration-200"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login ;
