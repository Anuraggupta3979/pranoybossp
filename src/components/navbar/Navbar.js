import React from "react";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { Link, withRouter } from "react-router-dom";
function NavbarH(props) {
  return (
    <nav className="navbar navbar-expand-lg navbarH">
      <div className="container-fluid ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li
              className={`nav-item  ${
                props.location.pathname === "/" ? "active" : "anu"
              }`}
            >
              <Link className="nav-link mr-5  " to="/">
                HOME
              </Link>
            </li>
            <li
              className={`nav-item  ${
                props.location.pathname === "/about" ? "active" : "anu"
              }`}
            >
              <Link className="nav-link mr-5" to="/about">
                ABOUT US
              </Link>
            </li>
            <li
              className={`nav-item  ${
                props.location.pathname === "/collection" ? "active" : "anu"
              }`}
            >
              <Link className="nav-link mr-5" to="/categories">
                CATEGORIES
              </Link>
            </li>
            <li
              className={`  ${
                props.location.pathname === "/blog" ? "active" : "anu"
              }`}
            >
              <Link className="nav-link mr-5" to="/blog">
                BLOG
              </Link>
            </li>
          </ul>
          {/* <a
            className="navbar-brand"
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

          {/* <ul className=" navbar-nav">
            <li
              className={`nav-item  ${
                props.location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="user m-5" to="/login">
                <PersonRoundedIcon></PersonRoundedIcon>
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
}

export default withRouter(NavbarH);
