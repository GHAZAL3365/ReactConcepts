import { useState } from "react";
import { LOGO_URL, CART_ICON_URL } from "../utills/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin((prevValue) => !prevValue);
  };
  return (
    <header className="h-30 w-full">
      <nav className="bg-pink-100 flex justify-between items-center px-2 h-[90px]">
        <div className="w-22 hover:scale-105 hover:cursor-pointer transition">
          <img src={LOGO_URL} alt="logo" />
        </div>
        <ul className="flex gap-5 items-center">
          <li className="p-2 border-b-2 border-b-transparent hover:border-b-2  hover:border-amber-500">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2  border-b-2 border-b-transparent  hover:border-b-2 hover:border-amber-500">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2  border-b-2 border-b-transparent  hover:border-b-2 hover:border-amber-500">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-2  border-b-2 border-b-transparent  hover:border-b-2 hover:border-amber-500">
            <Link to="/offers">Offers</Link>
          </li>
          <li className="w-10 hover:scale-105 hover:cursor-pointer transition">
            <img src={CART_ICON_URL} />
          </li>
          <button
            onClick={handleLogin}
            className="bg-orange-400 rounded-md px-3 py-2 cursor-pointer hover:bg-amber-500 text-white text-sm"
          >
            {isLogin ? "Login" : "Logout"}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
