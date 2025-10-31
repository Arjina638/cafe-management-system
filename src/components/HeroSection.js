import React from "react";
import { useNavigate } from "react-router-dom";
import hero from"../assets/hero.jpeg";



function HeroSection() {
    const navigate = useNavigate();
    return(
        <section 
            className="relative w-full bg-center bg-cover " 
            style={{backgroundImage: `url(${hero})` , height: "66vh"}} >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-6 text-center">
          Welcome to Aromalaya☕
        <p className="mt-3 text-lg md:text-xl"> Where every cup tells a story</p>
          </h1>
         <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-yellow-400 text-brown-900 px-6 py-2 rounded-lg font-semibold shadow hover:bg-yellow-300 transition">Login / Signup
          </button>
          <button
            onClick={() => navigate("/menu")}
            className="bg-transparent border-2 border-yellow-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-brown-900 transition"> Menu
          </button>
            </div>
    </div>
            </section>
    );

}

export default HeroSection;