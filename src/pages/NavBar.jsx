// NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import KumbatiaLogo from "../assets/KumbatiaLogo.jpg";
import {
  Navbar as RSNavbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav as RSNav,
  NavItem,
  NavLink,
  Button as RSButton,
} from "reactstrap";
import "../Styles/NavbBar.css";

// eslint-disable-next-line react/prop-types
const NavBar = ({ isOpen, toggleNavbar, isAuth, signUserOut }) => {
  return (
    <RSNavbar color="light" light expand="md" className="navbar">
      <NavbarBrand href="/">
        <img src={KumbatiaLogo} alt="Kumbatia Logo" className="logo" />
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={isOpen} navbar>
        <RSNav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/" className="nav-link">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/about" className="nav-link">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/programming" className="nav-link">
              Programming
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/partners" className="nav-link">
              Partners
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/getinvolved" className="nav-link">
              Get Involved
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/createpost" className="nav-link">
              Post
            </NavLink>
          </NavItem>
          {!isAuth ? (
            <NavItem>
              <NavLink tag={Link} to="/login" className="nav-link">
                Login
              </NavLink>
              <NavLink tag={Link} to="contact" className="nav-link">
                Contact
              </NavLink>
            </NavItem>
          ) : (
            <NavItem>
              <RSButton
                color="danger"
                onClick={signUserOut}
                className="btn-logout"
              >
                Log Out
              </RSButton>
            </NavItem>
          )}
        </RSNav>
      </Collapse>
    </RSNavbar>
  );
};

export default NavBar;
