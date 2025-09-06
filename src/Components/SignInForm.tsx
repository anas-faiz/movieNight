import { useState } from "react";

function SignInForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password);
  };

  return (
    <div className="m-3 p-3 flex items-center justify-center h-screen">
      <form className="bg-gray-500 flex flex-col p-10" onSubmit={handleSubmit}>
        <input
          className="bg-white text-black m-2 p-2 "
          type="email"
          value={userName}
          placeholder="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="bg-white text-black m-2 p-2"
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="bg-green-600 m-2 p-2 " type="submit" value="signIn" />
      </form>
    </div>
  );
}

export default SignInForm;
