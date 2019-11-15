import React from "react";
import "./Landing.css";
import Fade from "react-reveal/Fade";

const Landing = props => {
  return (
    <>
      <section>
        <Fade top>
          <article>
            <span className="code">while</span>
            <span> (</span>
            <span className="code-Text">alive</span>
            <span>{") {"}</span>
            <p>
              <span className="code-Text">eat</span>();
            </p>
            <p>
              <span className="code-Text">sleep</span>();
            </p>
            <p>
              <span className="code-Text">code</span>();
            </p>
            <p>
              <span className="code-Text">repeat</span>();
            </p>
            <p>{"}"}</p>
          </article>
        </Fade>
      </section>
    </>
  );
};

export default Landing;
