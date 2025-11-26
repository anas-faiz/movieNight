import { useContext, useState } from "react";
import { validate } from "../utils/validate";
import { useAuth } from "../utils/AuthContext";
import UserContext from '../utils/UserContext';

function LogInForm() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const {logInPage, setLogInPage} = useAuth();
  const{user , userName, displayName} = useContext(UserContext)

  const handleSubmit = () => {
    //console.log("Form submitted:", { email, password });
    const message = validate(email, password, userName,logInPage);
    setErrorMessage(message);
  };

  const handleLoginPage = () => {
    setLogInPage(!logInPage);
  };
  
  return (
    <div>          
      {/* Form */}
      <div className="relative z-10 flex items-center justify-center flex-grow px-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black/80 w-full max-w-md rounded-2xl shadow-2xl p-8 flex flex-col backdrop-blur-sm"
        >
          <h2 className="text-3xl font-extrabold text-center text-white mb-6">
            {logInPage ? "Log In" : "Sign Up"}
          </h2>

          {!logInPage && (
            <input
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          )}

          <input
            className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-600">{errorMessage}</p>

          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-red-600 mt-4 text-white font-semibold py-2 rounded-lg cursor-pointer hover:bg-red-700 transition duration-300 shadow-md"
          >
            {logInPage ? "Log In" : "Sign Up"}
          </button>

          <p className="text-sm text-gray-300 text-center mt-6">
            {logInPage ? "New Here?" : "Already a User?"}
            <span
              onClick={handleLoginPage}
              className="text-red-400 font-medium cursor-pointer hover:underline"
            >
              {!logInPage ? "Log In" : "Sign Up"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogInForm;
