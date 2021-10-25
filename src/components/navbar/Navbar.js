import React from "react";
// import "./Navbar.css";
import * as ReactBootStrap from "react-bootstrap";
import "../../assets/css/Navbar.css";
import { Link, withRouter } from "react-router-dom";
import NavImage from "../../assets/nav.png";
import categoriesList from "../../categoryList";

function Navv() {
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
                title="Categories"
                id="nav-dropdown"
                className="link"
              >
                <ReactBootStrap.Nav>
                  <Link className="nav-link  droplink  " to="/categories">
                    Categories
                  </Link>
                </ReactBootStrap.Nav>
                <hr />
                {categoriesList.map(({ name }) => (
                  <ReactBootStrap.Nav>
                    <Link
                      className="nav-link mr-5 link "
                      to={`/category/${name
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                    >
                      {name}
                    </Link>
                  </ReactBootStrap.Nav>
                ))}
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.Nav>
                <Link className="nav-link   link" to="/blog">
                  Contact
                </Link>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default withRouter(Navv);
