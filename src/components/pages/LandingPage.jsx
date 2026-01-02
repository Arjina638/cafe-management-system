import React from "react";
import Navbar from "../layout/Navbar";
import AboutUs from "./AllAboutUs";
import Footer from "../layout/Footer";
import Sidebar from "../layout/Sidebar";
import HeroSection from"../HeroSection";
// import HeroSection from "../components/HeroSection";
// import Carousel from "../components/Carousel";
// import FeaturesSection from "../components/FeaturesSection";
// import StatsSection from "../components/StatsSection";
// import TestimonialsSection from "../components/TestimonialsSection";



function LandingPage (){
  return(
    <div className="bg-[#f5f0e8] min-h-screen">
     <Navbar/>
    <Sidebar/>
    <HeroSection/> */}
     {/* <Carousel/>
    <StatsSection/>
    <FeaturesSection/>
    <TestimonialsSection/>  */}
    <AboutUs showButton = {true} />
    <Footer/>
    </div>
    
  );
}

export default LandingPage;

