import React, { useState } from "react";
// import "./Navbar.css";
import * as ReactBootStrap from "react-bootstrap";
import "../../assets/css/Navbar.css";
import { Link, withRouter } from "react-router-dom";
import NavImage from "../../assets/nav.png";
import categoriesList from "../../categoryList";
import { NavDropdown } from "react-bootstrap";
import { Link as MuiLink } from "@material-ui/core";
function Navbar() {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const title = (
    <span>
      <Link
        className=" mr-5  link "
        style={{ textDecoration: "none", color: "black" }}
        to="/categories"
      >
        Categories
      </Link>
    </span>
  );
  return (
    <div>
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="navbar fixed-top navborder"
      >
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="/" className="navbarBrand">
            <img
              src={NavImage}
              alt="Logo"
              style={{ width: "160px", height: "33px" }}
            />
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className=" navbarLinks">
              <ReactBootStrap.Nav>
                <Link className="nav-link mr-5 link " to="/">
                  Home
                </Link>
              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav>
                <Link className="nav-link mr-5  link" to="/about">
                  About
                </Link>
              </ReactBootStrap.Nav>

              <ReactBootStrap.NavDropdown
                title={title}
                id="collasible-nav-dropdown"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                {categoriesList.map(({ name }) => (
                  <NavDropdown.Item>
                    <Link
                      className="nav-link mr-5 link "
                      to={`/category/${name
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                      key={name}
                    >
                      {name}
                    </Link>
                  </NavDropdown.Item>
                ))}
              </ReactBootStrap.NavDropdown>

              <ReactBootStrap.Nav>
                <Link className="nav-link   link" to="#footer">
                  Contact
                </Link>
              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav>
                <MuiLink className="nav-link   link" href="#footer"></MuiLink>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default withRouter(Navbar);
