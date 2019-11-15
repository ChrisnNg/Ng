import React from "react";
import "./Landing.css";

const Landing = props => {
  return (
    <>
      <section>
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
      </section>
    </>
  );
};

export default Landing;
