import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to={"/"} className="navbar-logo">
            TRVL <i className="fab fa-typo3"></i>
          </Link>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
