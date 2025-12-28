import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); 

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav>
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;
