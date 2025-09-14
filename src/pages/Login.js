import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword]= React.useState("");
    const[name, setName] = React.useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
     e.preventDefault();
        if (email === "admin@example.com" && password === "1234") {
      navigate("/Homepage");
         } 
 };
      
 return (
    <div className="flex min-h-screen items-center justify-center bg-amber-100">
      {/* Login Box */}
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8 space-y-6">
        
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Kora" className="w-24 h-24" />
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold">Sign in to your account</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-sm font-medium text-gray-700">User Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login ;
