import React from "react";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { Link, withRouter } from "react-router-dom";
function NavbarH(props) {
  return (
    <nav class="navbar navbar-expand-lg navbarH">
      <div class="container-fluid ">
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
        <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li
              className={`nav-item  ${
                props.location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link mr-5  " to="/">
                HOME
              </Link>
            </li>
            <li
              className={`nav-item  ${
                props.location.pathname === "/about" ? "active" : ""
              }`}
            >
              <Link className="nav-link mr-5" to="/about">
                ABOUT US
              </Link>
            </li>
            <li
              className={`nav-item  ${
                props.location.pathname === "/collection" ? "active" : ""
              }`}
            >
              <Link className="nav-link mr-5" to="/categories">
                CATEGORIES
              </Link>
            </li>
            <li
              className={`nav-item  ${
                props.location.pathname === "/blog" ? "active" : ""
              }`}
            >
              <Link className="nav-link mr-5" to="/blog">
                BLOG
              </Link>
            </li>
          </ul>
          {/* <a
            class="navbar-brand"
            href="#"
            className=" navbar-nav me-auto"
          >
            <img
              src="https://spyrestudios.com/wp-content/uploads/07-logo.jpg"
              alt=""
              width="30"
              height="24"
            />
          </a> */}

          <ul class=" navbar-nav">
            <li
              className={`nav-item  ${
                props.location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="user m-5" to="/login">
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
