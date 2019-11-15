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
            <br />
            <span className="code-Text">eat</span>();
            <br />
            <span className="code-Text">sleep</span>();
            <br />
            <span className="code-Text">code</span>();
            <br />
            <span className="code-Text">repeat</span>();
            <p className="last">{"}"}</p>
          </article>
        </Fade>
      </section>
    </>
  );
};

export default Landing;
