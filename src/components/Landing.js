import React from "react";
import "./Landing.css";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";

const Landing = props => {
  return (
    <>
      <section id="landing">
        <article className="landing">
          <Fade>
            <b>Hi, I'm Christopher Ng</b>
          </Fade>
          <Fade right>
            <p>A Full-Stack Web Developer Graduate from Lighthouse Labs</p>
          </Fade>

          <Button type="button" className="btn btn-info landing-btn">
            Contact Me
          </Button>
          <Button type="button" className="btn btn-info landing-btn">
            Resume
          </Button>
        </article>
      </section>
    </>
  );
};

export default Landing;
