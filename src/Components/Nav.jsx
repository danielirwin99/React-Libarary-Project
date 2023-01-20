import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from "../assets/Library.svg";
import { Link } from "react-router-dom";

const Nav = ({ numberOfItems }) => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img className="logo" src={LibraryLogo} alt="" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link className="nav__link" to="/">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link className="nav__link" to="/books">
              Books
            </Link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            <Link className="nav__link" to="/cart">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
            {numberOfItems > 0 && (
              <span className="cart__length">{numberOfItems}</span>
            )}
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link className="menu__link" to="/">
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link className="menu__link" to="/books">
                Books
              </Link>
            </li>
            <li className="menu__list">
              <Link className="menu__link" to="/cart">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
