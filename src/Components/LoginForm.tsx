import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { email, password });
  };

  const bg_image = import.meta.env.VITE_home_background_image;

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Header */}
      <Header />

      {/* Form */}
      <div className="relative z-10 flex items-center justify-center flex-grow px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-black/80 w-full max-w-md rounded-2xl shadow-2xl p-8 flex flex-col backdrop-blur-sm"
        >
          <h2 className="text-3xl font-extrabold text-center text-white mb-6">
            Log In
          </h2>

          <input
            className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-6 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition duration-300 shadow-md"
          >
            Log In
          </button>

          <p className="text-sm text-gray-300 text-center mt-6">
            New here?{" "}
            <Link
              to="/signin"
              className="text-red-400 font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogInForm;
