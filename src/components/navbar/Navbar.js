import React from "react";
// import "./Navbar.css";
import * as ReactBootStrap from "react-bootstrap";
import "../../assets/css/Navbar.css";
import { Link, withRouter } from "react-router-dom";
import NavImage from "../../assets/nav.jpeg";

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
              style={{ width: "150px", height: "50px" }}
            />
            {/* <small>Craftjet</small> */}
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
        
                <ReactBootStrap.Nav>
                  <Link
                    className="nav-link mr-5 link"
                    to="category/cane-bamboo-crafts"
                  >
                    Cane and Bamboo Crafts
                  </Link>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                  <Link
                    className="nav-link mr-5 link"
                    to="category/cane-bamboo-crafts"
                  >
                    Festive Decor-Mania
                  </Link>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                  <Link
                    className="nav-link mr-5 link"
                    to="category/cane-bamboo-crafts"
                  >
                    Home Accessory-Splash
                  </Link>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                  <Link
                    className="nav-link mr-5 link"
                    to="category/cane-bamboo-crafts"
                  >
                    Metallic Marvels
                  </Link>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                  <Link
                    className="nav-link mr-5 link"
                    to="category/cane-bamboo-crafts"
                  >
                    Terracotta Art
                  </Link>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                  <Link
                    className="nav-link mr-5 link"
                    to="category/cane-bamboo-crafts"
                  >
                    Textile Treasures
                  </Link>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                  <Link
                    className="nav-link mr-5 link"
                    to="category/cane-bamboo-crafts"
                  >
                    Wooden Realm
                  </Link>
                </ReactBootStrap.Nav>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.Nav>
                <Link className="nav-link   link" to="/blog">
                  Blog
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
