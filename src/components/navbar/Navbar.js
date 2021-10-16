import React, { useState, useEffect } from "react";
// import "./Navbar.css";
import * as ReactBootStrap from "react-bootstrap";
import "../../assets/css/Navbar.css";
import { Link, withRouter } from "react-router-dom";
import { getAllDocs } from "../../helper/firestore";

function Navv() {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getAllDocs("categories").then((data) => {
      console.log("here");
      setCategoryList(data);
      // console.log(data);
    });
  }, []);
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
              src="https://th.bing.com/th/id/R.b90e6a70729f5ef2b99b006fec52feff?rik=xkHeTSKG2xHd2g&riu=http%3a%2f%2fwww.transparentpng.com%2fthumb%2fhandicraft%2fgold-handicraft-png-15.png&ehk=IOLDqtT0WYdSNK72mMxrjUd2Lm2wTZZT6fyoStsyX0I%3d&risl=&pid=ImgRaw&r=0"
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
                  <Link className="nav-link droplink" to="/categories">
                    Categories
                  </Link>
                </ReactBootStrap.Nav>
                {categoryList.map((category) => (
                  <ReactBootStrap.Nav>
                    <Link
                      className="nav-link mr-5 link"
                      to={`/category/${category.id}`}
                    >
                      {category.name}
                    </Link>
                  </ReactBootStrap.Nav>
                ))}
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
