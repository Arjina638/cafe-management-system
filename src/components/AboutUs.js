import React from "react";
import cafe from "../assets/cafe.jpeg";
import { Link } from "react-router-dom";
function AboutUs() {

  return (
    
     <section id="about" className="bg-cafe-beige py-16 px-6 flex flex-col md:flex-row items-center max-w-6xl mx-auto">
      <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <h2 className="text-3xl font-playfair font-bold text-cafe-brown mb-4">About Brew & Bean</h2>
        <p className="text-brown-900 mb-4">
          Located in the heart of the city, we serve freshly brewed coffee and delicious pastries in a warm, welcoming environment.
        </p>
        <ul className="list-disc pl-6 text-brown-900">
          <li>Artisan coffee crafted with love</li>
          <li>Freshly baked pastries every day</li>
          <li>Cozy, relaxing ambiance</li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <img src={cafe} alt="Cafe" className="rounded-xl shadow-md" />
      </div>
    </section>
  );
}
export default AboutUs;


