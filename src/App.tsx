import { Routes,Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";

function App (){
  return (
    <Routes>  
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signin" element={<SignUpPage/>}/>      
      <Route path="/login" element={<LoginPage/>} />

    </Routes>
  )
}

export default App;