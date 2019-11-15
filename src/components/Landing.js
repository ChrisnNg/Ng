import React from "react";
import "./Landing.css";
import Fade from "react-reveal/Fade";

const Landing = props => {
  return (
    <>
      <section>
        <article>
          <Fade>
            <b>Hi, I'm Christopher Ng</b>
          </Fade>
          <Fade right>
            <p>A Full Stack Web Developer from Lighthouse Labs</p>
          </Fade>
        </article>
      </section>
    </>
  );
};

export default Landing;
