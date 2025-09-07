import { Routes,Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import BrowsePage from "./Pages/BrowsePage";

function App (){
  return (
    <Routes>  
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signin" element={<SignUpPage/>}/>      
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/browse" element={<BrowsePage/>}/>

    </Routes>
  )
}

export default App;