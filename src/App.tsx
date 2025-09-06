import { Routes,Route } from "react-router-dom";
import SignInForm from "./Components/SignInForm";
import LogInForm from "./Components/LoginForm";
import HomePage from "./Components/HomePage";

function App (){
  return (
    <Routes>  
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signin" element={<SignInForm/>}/>      
      <Route path="/login" element={<LogInForm/>} />

    </Routes>
  )
}

export default App;