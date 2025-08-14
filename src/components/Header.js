import { useState, useContext } from "react";
import { LOGO_URL, CART_ICON_URL } from "../utills/constants";
import { Link } from "react-router-dom";


import ThemeContext from "../utills/Context/ThemeContext";
import CartContext from "../utills/Context/CartContext";



const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

 
  const {theme, toggleTheme} = useContext(ThemeContext);
  const {cartItems} = useContext(CartContext);
 




  const handleLogin = () => {
    setIsLogin((prevValue) => !prevValue);
  };

  const SunIcon = ({ size = 24, color = "orange" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);


const MoonIcon = ({ size = 24, color = "black" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 0010.08 9.79z" />
  </svg>
);




  return (
    <header className="h-30 w-full">
      <nav key={theme} className="bg-pink-100 text-black flex justify-between items-center px-2 h-[90px] dark:bg-gray-950 dark:text-white" >
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
          <li className="w-10 hover:scale-105 hover:cursor-pointer transition relative">
           <Link to="/cart">
            <img src={CART_ICON_URL} />
            <div className="w-5 h-5 rounded-full bg-red-600 absolute bottom-9 left-6 flex items-center justify-center"><span className="text-white font-bold text-sm">{cartItems.length}</span></div></Link>
          </li>
        
          <button
            onClick={handleLogin}
            className="bg-orange-400 rounded-md px-3 py-2 cursor-pointer hover:bg-amber-500 text-white text-sm"
          >
            {isLogin ? "Login" : "Logout"} 
          </button>

           <li className="font-semibold cursor-pointer"  onClick={toggleTheme}>
             {theme === "light" ?  <MoonIcon /> : <SunIcon />}
           </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
