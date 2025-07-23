import { LOGO_URL, CART_ICON_URL } from "../utills/constants";

const Header = () => {
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Offers</li>
          <li id="cart">
            <img src= {CART_ICON_URL} />
          </li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;