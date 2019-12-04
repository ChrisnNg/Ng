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

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Nav";
import Card from "./components/Card";
import { Row, Container, Col, ProgressBar, Button } from "react-bootstrap";
import Landing from "./components/Landing.js";
import Fade from "react-reveal/Fade";
import coding from "./assets/coding.jpg";
import Footer from "./components/Footer.js";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import site from "./assets/planetside.png";
import jungle from "./assets/jungle_main.png";
import miso from "./assets/miso_list_landing.png";
import cat_park from "./assets/cat_park.png";
import scheduler from "./assets/scheduler.gif";
import tweeter from "./assets/tweeter.png";
import lotide from "./assets/lotide.png";
import tinyapp from "./assets/tinyapp.png";
import stackdata from "./assets/stackdata.jpeg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as loader from "./assets/loader.json";
import Lottie from "react-lottie";
import ContactMe from "./components/ContactMe.js";

function App() {
  function createCards(arrayOfCards) {
    const allCards = [];
    arrayOfCards.map(card => {
      if (card.footer) {
        card.footer = card.footer.join(" ");
      } else card["footer"] = null;

      allCards.push(
        <Col sm={"auto"}>
          <Fade right>
            <Card
              title={card.title}
              text={card.text}
              imgsrc={card.imgsrc}
              footer={card.footer}
            />
          </Fade>
        </Col>
      );
    });
    return allCards;
  }

  const [Show, handleShow] = useState("hidden");
  const [loaded, setLoaded] = useState(false);

  function handleClick() {
    if (Show === "hidden") {
      handleShow("Show");
      toast("Click on the Project titles to access their Githubs!", {
        position: toast.POSITION.TOP_CENTER
      });
    } else handleShow("hidden");
  }

  function progressStack(projects) {
    let stackCount = {};
    const finalCount = [];
    projects.map(project => {
      for (let stack of project.footer) {
        if (stackCount[stack]) {
          stackCount[stack] += 1;
        } else stackCount[stack] = 1;
      }
    });

    finalCount.push(
      <ProgressBar>
        <ProgressBar
          animated
          variant={"primary"}
          now={(stackCount["Axios"] / projects.length) * 100}
          label={`${"Axios"} ${(stackCount["Axios"] / projects.length) * 100}%`}
        />
        <ProgressBar
          animated
          variant={"primary"}
          now={(stackCount["Express"] / projects.length) * 100}
          label={`${"Express"} ${(stackCount["Express"] / projects.length) *
            100}%`}
        />
        <ProgressBar
          animated
          variant={"primary"}
          now={(stackCount["Ajax"] / projects.length) * 100}
          label={`${"Ajax"} ${(stackCount["Ajax"] / projects.length) * 100}%`}
        />
      </ProgressBar>
    );

    finalCount.push(
      <ProgressBar
        animated
        variant={"dark"}
        now={(stackCount["Mocha"] / projects.length) * 100}
        label={`${"Mocha"} ${(stackCount["Mocha"] / projects.length) * 100}%`}
      />,
      <ProgressBar
        animated
        variant={"dark"}
        now={(stackCount["Chai"] / projects.length) * 100}
        label={`${"Chai"} ${(stackCount["Chai"] / projects.length) * 100}%`}
      />,
      <ProgressBar
        animated
        variant={"dark"}
        now={(stackCount["Capybara"] / projects.length) * 100}
        label={`${"Capybara"} ${(stackCount["Capybara"] / projects.length) *
          100}%`}
      />,
      <ProgressBar
        animated
        variant={"dark"}
        now={(stackCount["Poltergeist"] / projects.length) * 100}
        label={`${"Poltergeist"} ${(stackCount["Poltergeist"] /
          projects.length) *
          100}%`}
      />,
      <ProgressBar
        animated
        variant={"dark"}
        now={(stackCount["Storybook"] / projects.length) * 100}
        label={`${"Storybook"} ${(stackCount["Storybook"] / projects.length) *
          100}%`}
      />,
      <ProgressBar
        animated
        variant={"dark"}
        now={(stackCount["Cypress"] / projects.length) * 100}
        label={`${"Cypress"} ${(stackCount["Cypress"] / projects.length) *
          100}%`}
      />,
      <ProgressBar
        animated
        variant={"dark"}
        now={(stackCount["Jest"] / projects.length) * 100}
        label={`${"Jest"} ${(stackCount["Jest"] / projects.length) * 100}%`}
      />
    );

    [
      "Axios",
      "Express",
      "Ajax",
      "Mocha",
      "Chai",
      "Capybara",
      "Poltergeist",
      "Storybook",
      "Cypress",
      "Jest"
    ].forEach(stack => delete stackCount[stack]);

    for (let stack in stackCount) {
      let variant = "info";
      if (
        stack === "Javascript" ||
        stack === "HTML" ||
        stack === "CSS" ||
        stack === "Ruby" ||
        stack === "Golang"
      ) {
        variant = "success";
      }
      if (stack === "Postgres") {
        variant = "danger";
      }

      finalCount.push(
        <ProgressBar
          animated
          variant={variant}
          now={(stackCount[stack] / projects.length) * 100}
          label={`${stack} ${(stackCount[stack] / projects.length) * 100}%`}
        />
      );
    }
    return finalCount;
  }

  let projects = [
    {
      title: (
        <a href="https://github.com/ChrisnNg/Ng" target="_blank">
          My Portfolio Site
        </a>
      ),
      text: (
        <>
          This website you're current on!
          <br />
          Created the first week after my graduation from Lighthouse Labs, This
          site serves as the point of reference for future employers.
        </>
      ),
      imgsrc: site,
      footer: ["Javascript", "HTML", "CSS", "ReactJS", "Bootstrap", "Jquery"]
    },
    {
      title: (
        <a href="https://github.com/ChrisnNg/cat_park" target="_blank">
          cat_park
        </a>
      ),
      text: (
        <>
          If you can't park, use cat_park! This project was created by Chris and
          Thomas (CaT) to solve the problems of finding parking in metro
          Vancouver. Included in this app are all the parking meters in
          Vancouver and a crime heatmap to see where it is safer to park
          relative to the area.
        </>
      ),
      imgsrc: cat_park,
      footer: [
        "Javascript",
        "HTML",
        "CSS",
        "ReactJS",
        "Golang",
        "Bootstrap",
        "Material-UI",
        "Axios",
        "Postgres"
      ]
    },
    {
      title: (
        <a href="https://github.com/ChrisnNg/scheduler" target="_blank">
          Scheduler
        </a>
      ),
      text: (
        <>
          <span>
            A Single-paged application with a persistent database to help
            schedule interviews. Built with React.js and tested with Jest,
            Cypress, and Storybook.
            <br />
            Hosted{" "}
            <a
              href="https://vigorous-elion-2594d4.netlify.com/"
              target="_blank"
            >
              Here
            </a>
            &nbsp; on Netlify, and database hosted on Heroku.
          </span>
        </>
      ),
      imgsrc: scheduler,
      footer: [
        "Javascript",
        "HTML",
        "CSS",
        "ReactJS",
        "Axios",
        "Storybook",
        "Jest",
        "Cypress"
      ]
    },
    {
      title: (
        <a href="https://github.com/ChrisnNg/jungle-rails" target="_blank">
          Jungle
        </a>
      ),
      text: (
        <>
          A mini e-commerce application built with Rails 4.2 for purposes of
          teaching Rails by example. As a student, I have used this application
          to solve bugs and implement tickets VIA ticket-style.
        </>
      ),
      imgsrc: jungle,
      footer: [
        "Ruby",
        "Ruby on Rails",
        "ERB",
        "Postgres",
        "Capybara",
        "Poltergeist"
      ]
    },
    {
      title: (
        <a href="https://github.com/ChrisnNg/miso_list" target="_blank">
          miso_list
        </a>
      ),
      text: (
        <>
          <span>
            A smart, auto-categorizing todo list app. The user simply has to add
            the content, and it gets put into the correct list. Created as the
            product of my first group project.
            <br />
            Hosted{" "}
            <a href="https://misolist.herokuapp.com/" target="_blank">
              Here
            </a>
            &nbsp; on Heroku.
          </span>
        </>
      ),
      imgsrc: miso,
      footer: ["Javascript", "HTML", "CSS", "Express", "Postgres"]
    },
    {
      title: (
        <a href="https://github.com/ChrisnNg/tweeter" target="_blank">
          Tweeter
        </a>
      ),
      text: (
        <>
          Tweeter is a simple, single-page Twitter clone. This was built to
          practice my HTML, CSS, JS, jQuery and AJAX front-end skills, and my
          Node, Express and MongoDB back-end skills
          <br />
          Hosted{" "}
          <a href="https://tweeter-chris.herokuapp.com/" target="_blank">
            Here
          </a>
          &nbsp; on Heroku.
        </>
      ),
      imgsrc: tweeter,
      footer: ["Javascript", "HTML", "CSS", "Ajax", "Express", "Jquery"]
    },
    {
      title: (
        <a href="https://github.com/ChrisnNg/lotide" target="_blank">
          Lotide
        </a>
      ),
      text: (
        <>
          A mini clone of the Lodash library. BEWARE: This library was published
          for learning purposes. Tested with Mocha and Chai. It is not intended
          for use in production-grade software. This project was created and
          published by me as part of my learnings at Lighthouse Labs.
        </>
      ),
      imgsrc: lotide,
      footer: ["Javascript", "Mocha", "Chai"]
    },
    {
      title: (
        <a href="https://github.com/ChrisnNg/tinyapp" target="_blank">
          Tinyapp
        </a>
      ),
      text: (
        <>
          TinyApp is a full stack web application built with Node and Express
          that allows users to shorten long URLs (à la bit.ly). Fully features
          user account creation and user specific links and encypts account
          information with bcrypt. Tested with Mocha and Chai.
          <br />
          Hosted{" "}
          <a href="https://tiny-app-chris.herokuapp.com/login" target="_blank">
            Here
          </a>
          &nbsp; on Heroku.
        </>
      ),
      imgsrc: tinyapp,
      footer: ["Javascript", "HTML", "CSS", "Express", "Mocha", "Chai"]
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1250);
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
                        >
                          Javascript: The Stack Data Structure
                        </a>
                      }
                      text={
                        <>
                          Published on Medium!
                          <br />
                          This article was written during my time at Lighthouse
                          Labs, and serves to explain how the event loop feeds
                          into the call stack.
                        </>
                      }
                      imgsrc={stackdata}
                    />
                  </Fade>
                </Col>
              </Row>
            </Container>
          </section>

          <section id="projects">
            <Fade left>
              <h2>Projects</h2>
            </Fade>

            <Container>
              <Button variant="info" block onClick={handleClick} id="stack">
                Tech Stacks
              </Button>
              <section className={Show}>
                Color Scheme:
                <div className="screen">
                  <ProgressBar>
                    <ProgressBar
                      animated
                      variant={"primary"}
                      now={20}
                      label={`HTTP/XMLHttp`}
                    />

                    <ProgressBar
                      animated
                      variant={"dark"}
                      now={20}
                      label={`Testing`}
                    />

                    <ProgressBar
                      animated
                      variant={"success"}
                      now={20}
                      label={`Languages`}
                    />

                    <ProgressBar
                      animated
                      variant={"danger"}
                      now={20}
                      label={`Database`}
                    />

                    <ProgressBar
                      animated
                      variant={"info"}
                      now={20}
                      label={`Framework/Library`}
                    />
                  </ProgressBar>
                </div>
                <div className="mobile">
                  <ProgressBar
                    animated
                    variant={"primary"}
                    now={100}
                    label={`HTTP/XMLHttp`}
                  />

                  <ProgressBar
                    animated
                    variant={"dark"}
                    now={100}
                    label={`Testing`}
                  />

                  <ProgressBar
                    animated
                    variant={"success"}
                    now={100}
                    label={`Languages`}
                  />

                  <ProgressBar
                    animated
                    variant={"danger"}
                    now={100}
                    label={`Database`}
                  />

                  <ProgressBar
                    animated
                    variant={"info"}
                    now={100}
                    label={`Framework/Library`}
                  />
                </div>
                Stack Presence of the Projects ({projects.length}) below
                {progressStack(projects)}
              </section>
              <Row>{createCards(projects)}</Row>
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
