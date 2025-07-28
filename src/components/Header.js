import { useState } from "react";
import { LOGO_URL, CART_ICON_URL } from "../utills/constants";
import  {Link} from "react-router-dom"

const Header = () => {
 const [isLogin, setIsLogin] = useState(false);


 const handleLogin = () => {
  setIsLogin((prevValue) => !prevValue)
 }
  return (
    <header>
      <nav className="header">
        <div className="logo">
          <img
            src= {LOGO_URL}
            alt="logo"
          />
        </div>
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/offers">Offers</Link></li>
          <li id="cart">
            <img src= {CART_ICON_URL} />
          </li>
          <button onClick={handleLogin} className="auth-btn">{isLogin ? "Login": "Logout"}</button>
        </ul>
      </nav>
    </header>
  );
};


export default Header;