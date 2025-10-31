import React from "react";
import cafe from "../assets/cafe.jpeg";
import { Link } from "react-router-dom";
function AboutUs() {

  return (
    
    <section className="bg-[#fff8f0] py-12 px-4 md:px-16 flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2">
        <img
          src={cafe}
          alt="Cafe"
          className="rounded-xl shadow-lg w-full h-72 object-cover"
        ></img>
      </div>
      <div className="mid:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Welcome to Aromalaya</h2>
        <p className="text-grey-700 mb-4">
          Aromalaya is a Nepali styled cafe with drinks snacks and desserts you will be sure to know of once visited.We will be  your favorite spot for artisan coffee and
          freshly baked treats. We bring warmth, comfort, and the best flavors
          to every cup and bite. Whether you're here to relax or grab a quick
          treat, our cafe is your cozy corner.
        </p>
        <p className="text-grey-700">
          Visit us and experience a cozy atmosphere, friendly service, and a
          menu that delights every coffee lover.
        </p>
       
        <Link to ="/about" className="bg-transparent border-2 border-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-brown-900 transition" >Learn More
        </Link>

      </div>
    </section>
  );
}
export default AboutUs;


