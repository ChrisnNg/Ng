import React, { useState } from "react";
import "./Landing.css";
import Fade from "react-reveal/Fade";
import { Button, Modal } from "react-bootstrap";
import MyVerticallyCenteredModal from "./Modal.js";

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
            href="https://resume.creddle.io/resume/ei50h47r5km"
            target="_blank"
          >
            Résumé
          </a>
        </article>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </section>
    </>
  );
};

export default Landing;
