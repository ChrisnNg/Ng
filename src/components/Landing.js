import React from "react";
import "./Landing.css";
import Fade from "react-reveal/Fade";

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
        </article>
      </section>
    </>
  );
};

export default Landing;
