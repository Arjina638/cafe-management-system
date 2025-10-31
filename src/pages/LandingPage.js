import React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Menu from "./Menu";
import Carousel from "../components/Carousel";



function LandingPage (){
  return(
    <div className="bg-[#f5f0e8] min-h-screen">
    <Navbar/>
    <HeroSection/>
    <Carousel/>
    <AboutUs showButton = {true} />
    <Footer/>
    </div>
    
  );
}

export default LandingPage;

