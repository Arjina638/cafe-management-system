import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brownie from"../assets/brownie.jpeg";
import latte from"../assets/latte.jpeg";
import croissant from"../assets/croissant.jpeg";
import { useNavigate } from "react-router-dom";

const specials = [
  { id: 1, name: " Latte", img: latte, description:"Smooth espresso with steamed milk."},
  { id: 2, name: "Brownie", img: brownie, description: "Rich and soft ,gooey in every bite."},
  { id: 3, name: "Croissant", img: croissant, description:"Flaky and buttery,baked fresh every morning." },
];


function Carousel(){
    const navigate =useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed : 500,
        slidesToShow : 1,
        slidesToScroll : 1,
        autoplay: true,
        autoplaySpeed : 2500,
        arrows: false,
    }

return (
    <div className="ppx-2 md:px-4 py-4 bg-[#f5f0e8]" id="specials">
      <h2 className="text-2xl font-thin text-center mb-6">Aromalaya's Specials</h2>
      <Slider {...settings}>
        {specials.map((item) => (
          <div key={item.id} className="flex justify-center">
            <div className="bg-white rounded-xl shadow-lg text-center p-6 mx-4">
              <img
                src={item.img}
                alt={item.name}
                className="rounded-lg mx-auto h-64 object-cover"/>
             {/* <div className="flex flex-col justify-between mt-4 md:ml-0 w-full md:w-1/2"></div> */}
                <div className="mt-4 flex flex-col items-center">
              <h1 className="mt-3 text-lg font-semibold">{item.name}</h1>
              <p className="mt-2 text-gray-700">{item.description}</p> 
            <button onClick={() => navigate("/Login")} className="mt-4 bg-yellow-500 text-brown-900 px-4 py-2 rounded-lg shadow hover:bg-yellow-400"> Order Now </button>
          </div>
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
