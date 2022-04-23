import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo-1.png";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  const [navbarState, setNavbarState] = useState(false);
  const [navbarClass, setNavbarClass] = useState("collapse navbar-collapse");

  //Navbar Menus
  const menus = [
    {
      id: 1,
      text: "Home",
      url: "/",
    },
    {
      id: 2,
      text: "About",
      url: "/about",
    },
    {
      id: 3,
      text: "Contact",
      url: "/contact",
    },
  ];

  const myToggler = () => {
    navbarState
      ? setNavbarClass("collapse navbar-collapse")
      : setNavbarClass("collapse navbar-collapse show");
    setNavbarState(!navbarState);
  };

  return (
    <nav className="navbar navbar-expand-sm bg-theme text-white">
      <Link to="/" className="navbar-brand ml-5">
        <img src={logo} alt="logo goes here" width="40px" />
      </Link>
      <button className="navbar-toggler" type="button" onClick={myToggler}>
        <span className="text-white">Menu</span>
      </button>
      <div className={navbarClass}>
        <ul className="navbar-nav ml-auto mr-5">
          {menus.map((menu) => {
            return (
              <li key={menu.id} className="nav-item">
                <Link to={menu.url} className="nav-link text-white text-bold">
                  {menu.text}
                </Link>
              </li>
            );
          })}
          <li className="nav-item">
            <Link to="/" className="nav-link text-white text-bold">
              <FaCartArrowDown className="cart-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
