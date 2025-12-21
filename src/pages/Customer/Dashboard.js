import React from "react";
import CustomerSidebar from "../../components/CustomerSidebar";

 function Dashboard() {
  return (
    <div className="flex bg-[#fbf7f2] min-h-screen">
      <CustomerSidebar />

      <div className="flex-1 ml-64 p-10">
        <h1 className="text-3xl font-bold text-[#4b3f2f] mb-6">
          Welcome back, Customer! ☕
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Recent Orders */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-[#6e5246]">
              Recent Orders
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-[#f8f3ed] rounded-xl">
                <p className="font-semibold text-[#4b3f2f]">Iced Latte</p>
                <p className="text-xs text-gray-600">Delivered</p>
              </div>

              <div className="p-4 bg-[#f8f3ed] rounded-xl">
                <p className="font-semibold text-[#4b3f2f]">Matcha Tea</p>
                <p className="text-xs text-gray-600">Delivered</p>
              </div>
            </div>
          </div>

          {/* Favorite Items */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-[#6e5246]">
              Favorite Items
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-[#f8f3ed] rounded-xl">
                <p className="font-semibold text-[#4b3f2f]">Caramel Latte</p>
              </div>

              <div className="p-4 bg-[#f8f3ed] rounded-xl">
                <p className="font-semibold text-[#4b3f2f]">Chocolate Brownie</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
export default Dashboard;