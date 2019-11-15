import React from "react";
import pfp from "./assets/pfp.png";
import lhl from "./assets/lhl.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Nav";
import Card from "./components/Card";
import { Row, Container, Col } from "react-bootstrap";
import Landing from "./components/Landing.js";
import Fade from "react-reveal/Fade";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing />
        <img src={pfp} className="App-logo" alt="logo" />
        <p>Christopher Ng</p>
        <p>Full Stack Web Developer</p>
      </header>
      <Navbar />
      <Container>
        <Fade bottom>
          <Row>
            <Col sm={6}>
              <Card
                title="Education"
                text={
                  <>
                    <b>Lighthouse Labs</b>
                    <br />
                    <>Graduate of 2019</>
                  </>
                }
                imgsrc={lhl}
              />
            </Col>
            <Col sm={6}>
              <Card
                title="title of card 2"
                text="On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms of pleasure of the
        moment, so blinded by desire, that they cannot foresee the pain and"
                imgsrc={lhl}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Card
                title="title of card 3"
                text="On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms of pleasure of the
        moment, so blinded by desire, that they cannot foresee the pain and"
                imgsrc={lhl}
              />
            </Col>
            <Col sm={6}>
              <Card
                title="title of card 4"
                text="On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms of pleasure of the
        moment, so blinded by desire, that they cannot foresee the pain and"
                imgsrc={lhl}
              />
            </Col>
          </Row>
        </Fade>
      </Container>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <p>
        "On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms of pleasure of the
        moment, so blinded by desire, that they cannot foresee the pain and
        trouble that are bound to ensue; and equal blame belongs to those who
        fail in their duty through weakness of will, which is the same as saying
        through shrinking from toil and pain. These cases are perfectly simple
        and easy to distinguish. In a free hour, when our power of choice is
        untrammelled and when nothing prevents our being able to do what we like
        best, every pleasure is to be welcomed and every pain avoided. But in
        certain circumstances and owing to the claims of duty or the obligations
        of business it will frequently occur that pleasures have to be
        repudiated and annoyances accepted. The wise man therefore always holds
        in these matters to this principle of selection: he rejects pleasures to
        secure other greater pleasures, or else he endures pains to avoid worse
        pains."
      </p>
    </div>
  );
}

export default App;
