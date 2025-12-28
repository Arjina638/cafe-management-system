import React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../pages/AllAboutUs";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
// import Carousel from "../components/Carousel";
// import FeaturesSection from "../components/FeaturesSection";
// import StatsSection from "../components/StatsSection";
// import TestimonialsSection from "../components/TestimonialsSection";



function LandingPage (){
  return(
    <div className="bg-[#f5f0e8] min-h-screen">
    <Navbar/>
    <HeroSection/>
    {/* <Carousel/>
    <StatsSection/>
    <FeaturesSection/>
    <TestimonialsSection/> */}
    <AboutUs showButton = {true} />
    <Footer/>
    </div>
    
  );
}

export default LandingPage;

