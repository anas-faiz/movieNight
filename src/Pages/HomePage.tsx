import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";


function HomePage() {
  const bg_image = import.meta.env.VITE_home_background_image;

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/70"></div>

      {/* Header */}
      <header className="relative z-10 w-full flex items-center justify-between px-10 py-6">
        <img
          className="h-12 md:h-16 object-contain drop-shadow-lg"
          src={Logo}
          alt="Logo"
        />
        <Link to="./login"><button className="bg-red-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition duration-300 ease-in-out">
          Log In
        </button>
        </Link>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
          Welcome to <span className="text-red-500">MovieNight</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
          Stream unlimited movies and get AI-powered recommendations tailored
          just for you.
        </p>
        <Link to="/signin"><button className="mt-8 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-red-700 hover:scale-105 transition duration-300 ease-in-out">
          Get Started
        </button>
        </Link>
      </main>
    </div>
  );
}

export default HomePage;
