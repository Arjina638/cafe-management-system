import { Link, useLocation } from "react-router-dom";

function CustomerSidebar() {
  const { pathname } = useLocation();

  const active =
    "bg-[#e8dfd3] text-[#4b3f2f] font-semibold rounded-xl px-4 py-2";

  const normal =
    "px-4 py-2 rounded-xl text-[#6e5246] hover:bg-[#f0e8df] transition";

  return (
    <div className="w-64 h-screen bg-[#f5f0e8] shadow-xl border-r p-6 fixed">
      <h2 className="text-2xl font-bold text-[#4b3f2f] mb-6">☕ Aromalaya</h2>

      <nav className="flex flex-col gap-4">
        <Link
          to="/customer/dashboard"
          className={pathname.includes("dashboard") ? active : normal}>
          Dashboard
        </Link>

        <Link
          to="/customer/menu"
          className={pathname.includes("menu") ? active : normal}>
          Menu
        </Link>

        <Link
          to="/customer/cart"
          className={pathname.includes("cart") ? active : normal}>
          Cart
        </Link>

        <Link
          to="/customer/orders"
          className={pathname.includes("orders") ? active : normal}>
          Order History
        </Link>

        <Link
          to="/customer/profile"
          className={pathname.includes("profile") ? active : normal}>
          Profile
        </Link>
      </nav>
    </div>
  );
}
export default CustomerSidebar;
