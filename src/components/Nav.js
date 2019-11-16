import React from "react";
import { Navbar } from "react-bootstrap";
import "./Nav.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  return (
    <>
      <Navbar variant="dark" sticky="top" className="navi">
        <Link to="landing" spy={true} smooth={true}>
          <b>Christopher Ng</b>
        </Link>
        <Link to="about" spy={true} smooth={true}>
          About
        </Link>
      </Navbar>
    </>
  );
};

export default Nav;
