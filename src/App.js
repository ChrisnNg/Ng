import React from "react";
import pfp from "./assets/pfp.png";
import lhl from "./assets/lhl.jpg";

import react from "./assets/react.png";
import architecture from "./assets/architecture.png";
import db from "./assets/db.png";
import fundamentals from "./assets/fundamentals.png";
import htmlcss from "./assets/htmlcss.png";
import jsNode from "./assets/jsNode.png";
import ruby from "./assets/ruby.png";
import testing from "./assets/testing.png";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Nav";
import Card from "./components/Card";
import { Row, Container, Col } from "react-bootstrap";
import Landing from "./components/Landing.js";
import Fade from "react-reveal/Fade";
import coding from "./assets/coding.jpg";
import Footer from "./components/Footer.js";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing />
      </header>
      <Navbar />
      <section id="about">
        <h2>About me!</h2>
        <Container>
          <Row>
            <Col sm={6}>
              <Fade bottom>
                <Card
                  title="Education"
                  text={
                    <>
                      <a href="https://www.lighthouselabs.ca/web-bootcamp">
                        <b>Lighthouse Labs</b>
                      </a>
                      <br />
                      Graduate of 2019
                      <br />
                      <OverlayTrigger
                        key="react"
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                          <Tooltip id={`tooltip-${"react"}`}>
                            <strong>{"React"}</strong>
                          </Tooltip>
                        }
                      >
                        <img src={react} alt="react" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        key="architecture"
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                          <Tooltip id={`tooltip-${"architecture"}`}>
                            <strong>{"Architecture"}</strong>
                          </Tooltip>
                        }
                      >
                        <img src={architecture} alt="architecture" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        key="database"
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                          <Tooltip id={`tooltip-${"database"}`}>
                            <strong>{"Database"}</strong>
                          </Tooltip>
                        }
                      >
                        <img src={db} alt="db" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        key="fundamentals"
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                          <Tooltip id={`tooltip-${"fundamentals"}`}>
                            <strong>{"Fundamentals"}</strong>
                          </Tooltip>
                        }
                      >
                        <img src={fundamentals} alt="fundamentals" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        key="htmlcss"
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                          <Tooltip id={`tooltip-${"htmlcss"}`}>
                            <strong>{"Html & CSS"}</strong>
                          </Tooltip>
                        }
                      >
                        <img src={htmlcss} alt="htmlcss" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        key="jsNode"
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                          <Tooltip id={`tooltip-${"jsNode"}`}>
                            <strong>{"Javascript & Node.js"}</strong>
                          </Tooltip>
                        }
                      >
                        <img src={jsNode} alt="javascript and node" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        key="ruby"
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                          <Tooltip id={`tooltip-${"ruby"}`}>
                            <strong>{"Ruby"}</strong>
                          </Tooltip>
                        }
                      >
                        <img src={ruby} alt="ruby" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        key="test"
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                          <Tooltip id={`tooltip-${"test"}`}>
                            <strong>{"Testing"}</strong>
                          </Tooltip>
                        }
                      >
                        <img src={testing} alt="testing" />
                      </OverlayTrigger>
                      <br />
                      <span className="mini">Hover us!</span>
                    </>
                  }
                  imgsrc={lhl}
                />
              </Fade>
            </Col>
            <Col sm={6}>
              <Fade bottom>
                <Card
                  title="title of card 2"
                  text="On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms of pleasure of the
        moment, so blinded by desire, that they cannot foresee the pain and"
                  imgsrc={lhl}
                />
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Fade bottom>
                <Card
                  title="Hobbies"
                  text={
                    <>
                      <span className="codes">
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
                        <br />
                        <span className="last">{"}"}</span>
                      </span>
                    </>
                  }
                  imgsrc={coding}
                />
              </Fade>
            </Col>
            <Col sm={6}>
              <Fade bottom>
                <Card
                  title="Contact Me"
                  text={
                    <>
                      I am currently in Vancouver and can be reached by phone or
                      email:
                      <br />
                      <i className="fas fa-mobile-alt" /> 778-302-7999
                      <br />
                      <i className="far fa-envelope" />
                      <span className="shrink"> Cristopherng@hotmail.com</span>
                      <br />
                      <span className="mini">
                        no it's not mispelled. theres no 'h' after the 'c'
                      </span>
                    </>
                  }
                  imgsrc={pfp}
                />
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <Container>
          <Row>
            <Col sm={6}>
              <Fade bottom>
                <Card
                  title="Education"
                  text={
                    <>
                      <a href="https://www.lighthouselabs.ca/web-bootcamp">
                        <b>Lighthouse Labs</b>
                      </a>
                      <br />
                      Graduate of 2019
                      <br />
                      <OverlayTrigger
                        key="react"
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                          <Tooltip id={`tooltip-${"react"}`}>
                            <strong>{"React"}</strong>
                          </Tooltip>
                        }
                      >
                        <img src={react} alt="react" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        key="architecture"
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                          <Tooltip id={`tooltip-${"architecture"}`}>
                            <strong>{"Architecture"}</strong>
                          </Tooltip>
                        }
                      >
                        <img src={architecture} alt="architecture" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        key="database"
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                          <Tooltip id={`tooltip-${"database"}`}>
                            <strong>{"Database"}</strong>
                          </Tooltip>
                        }
                      >
                        <img src={db} alt="db" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        key="fundamentals"
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                          <Tooltip id={`tooltip-${"fundamentals"}`}>
                            <strong>{"Fundamentals"}</strong>
                          </Tooltip>
                        }
                      >
                        <img src={fundamentals} alt="fundamentals" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        key="htmlcss"
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                          <Tooltip id={`tooltip-${"htmlcss"}`}>
                            <strong>{"Html & CSS"}</strong>
                          </Tooltip>
                        }
                      >
                        <img src={htmlcss} alt="htmlcss" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        key="jsNode"
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                          <Tooltip id={`tooltip-${"jsNode"}`}>
                            <strong>{"Javascript & Node.js"}</strong>
                          </Tooltip>
                        }
                      >
                        <img src={jsNode} alt="javascript and node" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        key="ruby"
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                          <Tooltip id={`tooltip-${"ruby"}`}>
                            <strong>{"Ruby"}</strong>
                          </Tooltip>
                        }
                      >
                        <img src={ruby} alt="ruby" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        key="test"
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                          <Tooltip id={`tooltip-${"test"}`}>
                            <strong>{"Testing"}</strong>
                          </Tooltip>
                        }
                      >
                        <img src={testing} alt="testing" />
                      </OverlayTrigger>
                      <br />
                      <span className="mini">Hover us!</span>
                    </>
                  }
                  imgsrc={lhl}
                />
              </Fade>
            </Col>
            <Col sm={6}>
              <Fade bottom>
                <Card
                  title="title of card 2"
                  text="On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms of pleasure of the
        moment, so blinded by desire, that they cannot foresee the pain and"
                  imgsrc={lhl}
                />
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Fade bottom>
                <Card
                  title="Hobbies"
                  text={
                    <>
                      <span className="codes">
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
                        <br />
                        <span className="last">{"}"}</span>
                      </span>
                    </>
                  }
                  imgsrc={coding}
                />
              </Fade>
            </Col>
            <Col sm={6}>
              <Fade bottom>
                <Card
                  title="Contact Me"
                  text={
                    <>
                      I am currently in Vancouver and can be reached by phone or
                      email:
                      <br />
                      <i className="fas fa-mobile-alt" /> 778-302-7999
                      <br />
                      <i className="far fa-envelope" />
                      <span className="shrink"> Cristopherng@hotmail.com</span>
                      <br />
                      <span className="mini">
                        no it's not mispelled. theres no 'h' after the 'c'
                      </span>
                    </>
                  }
                  imgsrc={pfp}
                />
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>

      <Fade top>
        <Footer />
      </Fade>
    </div>
  );
}

export default App;
