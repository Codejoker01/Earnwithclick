import React, { Fragment, useEffect, useState } from "react";
import "../navbar/Navbar.css";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 150 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <Fragment>
      <div className="navbar-main-container ">
        <div className={`navbar-child-cont  ${sticky ? "dark-nav" : ""}`}>
          <div className="navbar-heading-wrapper">
            <h1>
              EARNWITH<span>CLICK</span>{" "}
            </h1>
          </div>
          <div className="navbar-link-container">
            <Link to="/"> Home</Link>
            <Link to="/publisher">Publisher Rates</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Sign Up</Link>
          </div>
          <div className="responsibe-logo-cont">
            <i>
              <FiMenu />
            </i>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
