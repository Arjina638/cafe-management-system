// src/pages/MenuPage.jsx
import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
const menuItems = [
  // ----- TEA -----
  {
    id: 1,
    name: "Black Tea",
    description: "Classic strong brewed black tea.",
    price: 15.0,
    available: true,
    image: "/images/BlackTea.jpeg",
    category: "Tea",
  },
  {
    id: 2,
    name: "Green Tea",
    description: "Light and fresh green tea.",
    price: 30.0,
    available: true,
    image: "/images/GreenTea.jpeg",
    category: "Tea",
  },
  {
    id: 3,
    name: "Milk Tea",
    description: "Creamy milk tea — comforting and smooth.",
    price: 25.0,
    available: true,
    image: "/images/MilkTea.jpeg",
    category: "Tea",
  },
  {
    id: 4,
    name: "Matka Chiya",
    description: "Spiced tea in local matka.",
    price: 90.0,
    available: true,
    image: "/images/MatkaChai.jpeg",
    category: "Tea",
  },
  {
    id: 5,
    name: "Hot Lemon Tea",
    description: "Zesty ginger + lemon — local favourite for colds.",
    price: 30.0,
    available: true,
    image: "/images/LemonTea.jpeg",
    category: "Tea",
  },

  // ----- COFFEE -----
  {
    id: 6,
    name: "Americano",
    description: "Espresso diluted with hot water — bold and simple.",
    price: 160.0,
    available: true,
    image: "/images/Americano.jpeg",
    category: "Coffee",
  },
  {
    id: 7,
    name: "Cappuccino",
    description: "Espresso + steamed milk + thick foam.",
    price: 180.0,
    available: true,
    image: "/images/Cappuccino.jpeg",
    category: "Coffee",
  },
  {
    id: 8,
    name: "Latte",
    description: "Smooth espresso with steamed milk, lightly foamed.",
    price: 200.0,
    available: true,
    image: "/images/latte.jpeg",
    category: "Coffee",
  },
  {
    id: 9,
    name: "Double Shot Espresso",
    description: "Concentrated shot of pure espresso.",
    price: 140.0,
    available: true,
    image: "/images/DoubleShotEspresso.jpeg",
    category: "Coffee",
  },
  {
    id: 10,
    name: "Mocha Frappuccino",
    description: "Espresso + chocolate + steamed milk.",
    price: 250.0,
    available: true,
    image: "/images/MochaFrappuccino.jpeg",
    category: "Coffee",
  },

  // ----- SODA / COLD DRINKS -----
  {
    id: 11,
    name: "Classic Cola",
    description: "Chilled classic cola soda.",
    price: 50.0,
    available: true,
    image: "/images/Coke.jpeg",
    category: "Cold Drinks",
  },
  {
    id: 12,
    name: "Lemon Soda",
    description: "Sparkling lemon soda — refreshing and tart.",
    price: 90.0,
    available: true,
    image: "/images/Lemonsoda.jpeg",
    category: "Cold Drinks",
  },
  // Iced Tea / Cold Brew
  {
    id: 13,
    name: "Iced Lemon Tea",
    description: "Cold brewed tea with a bright lemon twist.",
    price: 100.0,
    available: true,
    image: "/images/IcedLemonTea.jpeg",
    category: "Cold Drinks",
  },
  {
    id: 14,
    name: "Peach Iced Tea",
    description: "Fruity peach-flavored iced tea.",
    price: 100.0,
    available: true,
    image: "/images/PeachIcedTea.jpeg",
    category: "Cold Drinks",
  },
  {
    id: 15,
    name: "Iced Mint Tea",
    description: "Herbal iced tea using valley-grown mint.",
    price: 110.0,
    available: true,
    image: "/images/IcedMintTea.jpeg",
    category: "Cold Drinks",
  },
  // Milkshakes / Smoothies
  {
    id: 16,
    name: "Chocolate Milkshake",
    description: "Rich chocolate shake.",
    price: 180.0,
    available: true,
    image: "/images/ChocolateMilkshake.jpeg",
    category: "Cold Drinks",
  },
  {
    id: 17,
    name: "Vanilla Milkshake",
    description: "Classic vanilla shake.",
    price: 180.0,
    available: true,
    image: "/images/VanillaMilkshake.jpeg",
    category: "Cold Drinks",
  },
  {
    id: 18,
    name: "Strawberry Milkshake",
    description: "Fresh strawberry shake.",
    price: 180.0,
    available: true,
    image: "/images/StrawberryMilkshake.jpeg",
    category: "Cold Drinks",
  },
  {
    id: 19,
    name: "Mango Shake",
    description: "Seasonal mango shake — creamy hit.",
    price: 200.0,
    available: true,
    image: "/images/MangoMilkshake.jpeg",
    category: "Cold Drinks",
  },
  {
    id: 20,
    name: "Mango Smoothie",
    description: "Fruit-forward mango smoothie.",
    price: 250.0,
    available: true,
    image: "/images/MangoSmoothie.jpeg",
    category: "Cold Drinks",
  },
  {
    id: 21,
    name: "Mixed Berry Smoothie",
    description: "Blend of seasonal berries.",
    price: 280.0,
    available: true,
    image: "/images/BerrySmoothie.jpeg",
    category: "Cold Drinks",
  },

  // ----- LASSI & REFRESHERS -----
  {
    id: 22,
    name: "Sweet Lassi",
    description: "Creamy, slightly sweet yogurt drink.",
    price: 110.0,
    available: true,
    image: "/images/SweetLassi.jpeg",
    category: "Lassi & Refreshers",
  },
  {
    id: 23,
    name: "Mango Lassi",
    description: "Mango and yogurt blended — sweet and creamy.",
    price: 150.0,
    available: true,
    image: "/images/MangoLassi.jpeg",
    category: "Lassi & Refreshers",
  },

  {
    id: 24,
    name: "Lemonade",
    description: "Classic fresh lemonade.",
    price: 70.0,
    available: true,
    image: "/images/Lemonade.jpeg",
    category: "Lassi & Refreshers",
  },

  {
    id: 25,
    name: "Fruit Punch - Orange Pineapple",
    description: "Citrusy orange & pineapple blend.",
    price: 110.0,
    available: true,
    image: "/images/OrangePineappleFP.jpeg",
    category: "Lassi & Refreshers",
  },
  {
    id: 26,
    name: "Fruit Punch - Mango Banana",
    description: "Creamy mango & banana blend.",
    price: 110.0,
    available: true,
    image: "/images/MangoBananaFP.jpeg",
    category: "Lassi & Refreshers",
  },
  // ----- BAKERY & SNACKS -----
  {
    id: 27,
    name: "Croissant",
    description: "Buttery flaky croissant.",
    price: 120.0,
    available: true,
    image: "/images/croissant.jpeg",
    category: "Bakery & Snacks",
  },
  {
    id: 28,
    name: "Donut",
    description: "Classic glazed donut.",
    price: 50.0,
    available: true,
    image: "/images/Donut.jpeg",
    category: "Bakery & Snacks",
  },
  {
    id: 29,
    name: "Muffin",
    description: "Soft bakery muffin (various flavors).",
    price: 80.0,
    available: true,
    image: "/images/Muffin.jpeg",
    category: "Bakery & Snacks",
  },
  {
    id: 30,
    name: "Cookie",
    description: "Fresh baked cookie.",
    price: 80.0,
    available: true,
    image: "/images/Cookie.jpeg",
    category: "Bakery & Snacks",
  },
  {
    id: 31,
    name: " Brownie",
    description: "Rich and soft, gooey in every bite",
    price: 150.0,
    available: true,
    image: "/images/brownie.jpeg",
    category: "Bakery & Snacks",
  },
];

function GuestMenu() {
  const categories = [
    "All",
    ...Array.from(new Set(menuItems.map((i) => i.category))),
  ];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filtered =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((m) => m.category === activeCategory);

  return (
    <div className="bg-[#f5f0e8] min-h-screen flex flex-col">
      <Navbar />
      <div className="shadow-md max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#4b2e05]">
          Our Menu
        </h1>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-2 py-2 rounded-full border transition text-sm font-medium ${
                activeCategory === c
                  ? "bg-[#4b2e05] text-white border-transparent"
                  : "bg-white text-[#4b2e05] border-[#d6b48f]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-3 sm:grid-cols-2 mid grid-cols-2 lg:grid-cols-4 mt-10">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-md p-3 flex items-center overflow-hidden hover:shadow-lg transition ${
                !item.available ? "opacity-50" : ""
              }`}
            >
              {item.image && (
                <div className="w-15 h-48 flex-shrink-0 bg-[#f9f9f9] rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {/* Text section */}
              <div className="p-3 flex flex-col justify-between h-full w-full">
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-semibold text-[#4b2e05]">
                    {item.name}
                  </h2>
                  <span className="text-sm text-gray-500">{item.category}</span>
                </div>

                {item.description && (
                  <p className="text-gray-600 mt-1 text-sm">{item.description}</p>
                )}

                <div className="flex items-center justify-between mt-2">
                  <p className="text-lg font-semibold text-[#6f4518]">
                    Rs. {item.price.toFixed(2)}
                  </p>
                  <button
                    disabled={!item.available}
                    onClick={() => (window.location.href = "/login")}
                    className={`px-1 py-1 rounded-lg font-medium transition text-sm ${
                      item.available
                        ? "bg-[#4b2e05] text-white hover:bg-[#6f4518]"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {item.available ? "Order Now" : "Unavailable"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> 
      <Footer />
    </div>
  );
}

export default GuestMenu;
