import React from "react";
// import "./Navbar.css";
// import solo from "./solo.jpeg";
// import { Link, withRouter } from "react-router-dom";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { Link, withRouter } from "react-router-dom";
function NavbarH(props) {
  return (
    <nav class="navbar navbar-expand-lg mt-3 navbarH">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              className={`nav-item  ${
                props.location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link mr-5 link" to="/download">
                HOME
              </Link>
            </li>
            <li
              className={`nav-item  ${
                props.location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link mr-5" to="/pricing">
                ABOUT US
              </Link>
            </li>
            <li
              className={`nav-item  ${
                props.location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link mr-5" to="/features">
                COLLECTION
              </Link>
            </li>
            <li
              className={`nav-item  ${
                props.location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link mr-5" to="/about">
                BLOG
              </Link>
            </li>
          </ul>
          <a
            class="navbar-brand"
            href="#"
            className="d-flex navbar-nav me-auto"
          >
            <img
              src="https://spyrestudios.com/wp-content/uploads/07-logo.jpg"
              alt=""
              width="30"
              height="24"
            />
          </a>

          <ul class="d-flex navbar-nav">
            <li
              className={`nav-item  ${
                props.location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link mr-5" to="/login">
                <PersonRoundedIcon></PersonRoundedIcon>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(NavbarH);
