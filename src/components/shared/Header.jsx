import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header__container">
      <Link to="/">
        <h1 className="title">E-commerce</h1>
      </Link>
      <nav className="nav__bar">
        <ul className="btn__container">
          <li className="btn">
            <Link to="/purchases">Purchases</Link>
          </li>
          <li className="btn">
            <Link to="/login">Login</Link>
          </li>
          <li className="btn">
            <Link to="/register">Register</Link>
          </li>
          <li className="cart__btn">
            <Link to="/cart">
              <i className="bx bx-cart card__icon"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
