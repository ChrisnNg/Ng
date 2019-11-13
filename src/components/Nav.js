import React from "react";
import { Navbar } from "react-bootstrap";

const Nav = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {" React Bootstrap"}
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Nav;
