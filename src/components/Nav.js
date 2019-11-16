import React from "react";
import { Navbar } from "react-bootstrap";
import "./Nav.css";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <>
      <Navbar variant="dark" sticky="top" className="navi">
        <Link
          to="landing"
          activeClass="active"
          spy={true}
          smooth={true}
          className="links"
        >
          <b>Christopher Ng</b>
        </Link>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          className="links"
        >
          About
        </Link>
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          className="links"
        >
          Projects
        </Link>
        <a href="https://resume.creddle.io/resume/ei50h47r5km" target="_blank">
          Resume
        </a>
      </Navbar>
    </>
  );
};

export default Nav;
