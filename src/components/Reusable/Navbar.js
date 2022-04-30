import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import { Container, Label } from "reactstrap";
import ThemeContext from "../../context/ThemeContext";
import logo from "../../logo-1.png";

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
      <Container fluid>
        <Link to="/" className="navbar-brand ml-5">
          <img src={logo} alt="logo goes here" width="40px" />
        </Link>
        <button className="navbar-toggler" type="button" onClick={myToggler}>
          <span className="text-white">Menu</span>
        </button>
        <div className={navbarClass}>
          <ul className="navbar-nav mr-auto mr-5">
            {menus.map((menu) => {
              return (
                <li key={menu.id} className="nav-item">
                  <Link to={menu.url} className="nav-link text-white text-bold">
                    {menu.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <ThemeContext.Consumer>
                {(context) => (
                  <div>
                    <Label className="badge bg-warning text-wrap m-2">
                      {context.themeMode === "light" ? (
                        <span>Light Mode</span>
                      ) : (
                        <span className="text-black">Dark Mode</span>
                      )}
                    </Label>
                    <ReactSwitch
                      onChange={context.toggleTheme}
                      checked={context.themeMode === "dark"}
                      className="align-middle"
                    />
                  </div>
                )}
              </ThemeContext.Consumer>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link text-white">
                <FaCartArrowDown className="cart-icon" />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
