import React from "react";
// import "./Navbar.css";
import * as ReactBootStrap from "react-bootstrap";
import "../../assets/css/Navbar.css"
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
          <ReactBootStrap.Navbar.Brand href="#home" className="navbarBrand">
            Anurag Gupta
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className=" navbarLinks">
              <ReactBootStrap.Nav.Link href="#features" className="links">
                Home
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#pricing">
                About
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#deets">
                Certificates
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                Projects
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default Navv;
