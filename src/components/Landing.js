import React from "react";
import "./Landing.css";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";
import ContactMe from "./Form.js";

const Landing = props => {
  const [modalShow, setModalShow] = React.useState(false);

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

          <Button
            type="button"
            className="btn btn-info landing-btn"
            onClick={() => setModalShow(true)}
          >
            Contact Me
          </Button>

          <a
            className="btn btn-info landing-btn"
            href="https://resume.creddle.io/resume/fllf53dk8p7"
            target="_blank"
          >
            Résumé
          </a>
        </article>
        <ContactMe show={modalShow} onHide={() => setModalShow(false)} />
      </section>
    </>
  );
};

export default Landing;
