import React, { useState } from "react";
import axios from "axios";

export default function Auth() {
  const [mode, setMode] = useState("login"); // login | signup
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (mode === "signup" && form.password.length < 6)
      return "Password must be at least 6 characters";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    const error = validate();
    if (error) return setMsg(error);

    setLoading(true);

    try {
      if (mode === "login") {
        const res = await axios.post(
          "http://localhost:2004/api/login",
          { email: form.email, password: form.password },
          { withCredentials: true }
        );

        if (res.data.token)
          localStorage.setItem("token", res.data.token);

        setMsg("Login successful! Redirecting...");

        setTimeout(() => (window.location.href = "/menu"), 1000);
      } else {
        await axios.post(
          "http://localhost:2004/api/users/signup",
          form
        );

        setMsg("Signup successful! Redirecting to login…");
        setTimeout(() => setMode("login"), 1200);
      }
    } catch (err) {
      setMsg(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf7f2] flex items-center justify-center">
      <div className="bg-white shadow-xl p-8 rounded-xl w-96">
        <h2 className="text-2xl font-bold text-center mb-6">
          {mode === "login" ? "Welcome Back" : "Create Account"}
        </h2>

        {msg && <p className="text-center text-sm mb-3">{msg}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">

          {mode === "signup" && (
            <input
              name="name"
              placeholder="Full Name"
              className="border p-2 w-full rounded"
              onChange={handleChange}
              required
            />
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border p-2 w-full rounded"
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="border p-2 w-full rounded"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white w-full py-2 rounded hover:opacity-80 disabled:opacity-50"
          >
            {loading
              ? "Please wait…"
              : mode === "login"
              ? "Login"
              : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => {
                  setMsg("");
                  setMode("signup");
                }}
              >
                Create one
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => {
                  setMsg("");
                  setMode("login");
                }}
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
