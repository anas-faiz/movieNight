import SignInForm from "../Components/SignInForm";

    const bg_image = import.meta.env.VITE_home_background_image;

    function SignUpPage() {
    return(
        <div className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bg_image})` }}>
            <SignInForm/>
        </div>    
    )
    
}

export default SignUpPage;