import React, { useEffect, useState } from "react";
import pfp from "./assets/pfp.png";
import lhl from "./assets/lhl.jpg";
import hobby from "./assets/hobby.jpg";

import react from "./assets/react.png";
import architecture from "./assets/architecture.png";
import db from "./assets/db.png";
import fundamentals from "./assets/fundamentals.png";
import htmlcss from "./assets/htmlcss.png";
import jsNode from "./assets/jsNode.png";
import ruby from "./assets/ruby.png";
import testing from "./assets/testing.png";
import pairprogramming from "./assets/pairprogramming.png";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Nav";
import Card from "./components/Card";
import CardColumns from "react-bootstrap/CardColumns";
import { Row, Container, Col, Button } from "react-bootstrap";
import Landing from "./components/Landing.js";
import Fade from "react-reveal/Fade";
import coding from "./assets/coding.jpg";
import Footer from "./components/Footer.js";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import stackdata from "./assets/stackdata.jpeg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as loader from "./assets/loader.json";
import Lottie from "react-lottie";

import { projects } from "./projects.js";

function App() {
  function createCards(arrayOfCards) {
    const allCards = [];
    arrayOfCards.forEach(card => {
      if (card.footer) {
        card.footer = card.footer.join(" ");
      } else card["footer"] = null;

      allCards.push(
        <Fade right>
          <Card
            title={card.title}
            text={card.text}
            imgsrc={card.imgsrc}
            footer={card.footer}
          />
        </Fade>
      );
    });
    return allCards;
  }

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1100);
  }, []);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: loader.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="App">
      {!loaded ? (
        <Fade top>
          <div
            className="d-flex justify-content-center align-items-center"
            id="loader"
          >
            <Lottie
              id="loader"
              options={defaultOptions}
              height={400}
              width={400}
            />
          </div>
        </Fade>
      ) : (
        <div>
          <header className="App-header">
            <Fade bottom>
              <Landing />
            </Fade>
          </header>
          <Navbar />
          <section id="about">
            <Fade right>
              <h2>About me!</h2>
            </Fade>

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
                          <br />
                          <OverlayTrigger
                            key="react"
                            placement="bottom"
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
                            placement="bottom"
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
                      title="Raison D'être"
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
                          <br />
                          <span>
                            My Raison D'être is to software engineer creative
                            and unique solutions to problems. I am passionate
                            about studying and consider myself a forever-student
                            in coding.
                          </span>
                        </>
                      }
                      imgsrc={coding}
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
                          <span>
                            Outside of coding, I enjoy chess, and traveling.
                            Born and raised in Vancouver, some of the most
                            memorable places I have seen include Las Vegas,
                            Japan, Hong Kong, China, and Thailand.
                          </span>
                          <br />
                          <br />
                          <span className="overflow">
                            My favourite places are the British Columbia
                            mountains- both in the warm summer days and winter
                            wonderlands. That is the time when I go hiking in
                            the heart of nature and snowboarding down the slops.
                          </span>
                        </>
                      }
                      imgsrc={hobby}
                    />
                  </Fade>
                </Col>

                <Col sm={6}>
                  <Fade bottom>
                    <Card
                      title="Contact Me"
                      text={
                        <>
                          I am currently in Vancouver and can be reached by
                          phone or email:
                          <br />
                          <br />
                          <i className="fas fa-mobile-alt" /> 778-302-7999
                          <br />
                          <OverlayTrigger
                            key="test"
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={
                              <Tooltip id={`tooltip-${"test"}`}>
                                <strong>
                                  {"No 'h' after the 'c' is intended"}
                                </strong>
                              </Tooltip>
                            }
                          >
                            <span>
                              <i className="far fa-envelope" />{" "}
                              Cristopherng@hotmail.com
                            </span>
                          </OverlayTrigger>
                          <br />
                        </>
                      }
                      imgsrc={pfp}
                    />
                  </Fade>
                </Col>
              </Row>
            </Container>
          </section>

          <section id="publications">
            <Fade left>
              <h2>Publications</h2>
            </Fade>
            <Container>
              <Row>
                <Col sm={"auto"}>
                  <Fade left>
                    <Card
                      title={
                        <a
                          href="https://medium.com/@cristopherng/javascript-the-stack-data-structure-54d5d2e1905b"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Javascript: The Stack Data Structure
                        </a>
                      }
                      text={
                        <>
                          Explains how Javascript behaves as a multi-threaded
                          language despite being single-threaded
                        </>
                      }
                      imgsrc={stackdata}
                    />
                    <Card
                      title={
                        <a
                          href="https://medium.com/@cristopherng/pair-programming-ed0e7fc16aa7"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Pair Programming: My experience with it in bootcamp
                        </a>
                      }
                      text={
                        <>
                          A report on my experiences pair-programming in the
                          Lighthouse Labs bootcamp.
                        </>
                      }
                      imgsrc={pairprogramming}
                    />
                  </Fade>
                </Col>
              </Row>
            </Container>
          </section>

          <section id="projects">
            <Fade left>
              <h2>
                Major Projects{" "}
                <span className="mini">
                  See the rest on{" "}
                  <a href="https://github.com/ChrisnNg">Github</a>
                </span>
              </h2>
            </Fade>

            <Container>
              <CardColumns>{createCards(projects)}</CardColumns>
            </Container>
          </section>
          <h2 />
          <ToastContainer />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
