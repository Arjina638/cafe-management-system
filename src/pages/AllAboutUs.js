import React from "react";

function AllAboutUs() {
  return (
    <div className="min-h-screen bg-[#fff8f0]">
      {/* Full About Us content */}
      <AllAboutUs
        showButton={false} // hide "Learn More" button
        extraContent={
          <div className="px-4 md:px-16 py-8">
            <h3 className="text-2xl font-bold mb-2">Our Story</h3>
            <p className="text-gray-700 mb-4">
              Aromalaya started with a vision to bring authentic Nepali flavors and cozy cafe vibes together. Our mission is to create a warm, inviting space for everyone who loves great coffee and freshly baked treats.
            </p>

            <h3 className="text-2xl font-bold mb-2">Our Menu</h3>
            <p className="text-gray-700 mb-4">
              From artisan coffees and teas to freshly baked snacks and desserts, every item is crafted with care.
            </p>

            <h3 className="text-2xl font-bold mb-2">Our Team</h3>
            <p className="text-gray-700">
              Our friendly baristas and bakers are passionate about creating an experience that feels like home.
            </p>
          </div>
        }
      />
    </div>
  );
}

export default AllAboutUs;
