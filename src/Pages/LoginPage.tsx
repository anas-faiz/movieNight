import LogInForm from "../Components/LoginForm";
import Logo from "../assets/Logo.png"
    const bg_image = import.meta.env.VITE_home_background_image;

    function LoginPage(){
    return(
        <div className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bg_image})` }}>
            <LogInForm/>
        </div>

    ) 

}

export default LoginPage;