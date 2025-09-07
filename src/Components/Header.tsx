import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

function Header(){
    return(
        <header className="relative z-10 w-full flex items-center justify-between px-10 py-6">
        <Link to="/">
        <img
          className="h-12 md:h-24 object-contain drop-shadow-lg"
          src={Logo}
          alt="Logo"
        />
        </Link>
        <Link to="/login"><button className="bg-red-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition duration-300 ease-in-out">
          Log In
        </button>
        </Link>
      </header>

    )
}

export default Header;