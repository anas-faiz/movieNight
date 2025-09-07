import { useState } from "react";
import { Link } from "react-router-dom";

function SignInForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { userName, email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 flex flex-col"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>

        <input
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-6 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
        >
          Sign Up
        </button>

        <p className="text-sm text-gray-600 text-center mt-6">
          Already a user?{" "}
          <Link to="/login" className="text-green-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignInForm;
