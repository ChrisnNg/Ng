import React, { useState } from "react";
import { Button, Modal, Spinner, Form } from "react-bootstrap";
import "./Form.css";
import axios from "axios";
import qs from "qs";
import Fade from "react-reveal/Fade";

export default function MyVerticallyCenteredModal(props) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [mailSent, setmailSent] = useState(false);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();

    setloading(true);
    const form = {
      name: name,
      email: email,
      message: message
    };

    axios
      .post(process.env.REACT_APP_API_URL, qs.stringify(form))
      .then(response => {
        // console.log(response);
        setmailSent(true);
        seterror(null);
        setname("");
        setemail("");
        setmessage("");
        setloading(false);
      })
      .catch(error => {
        console.log(error);
        seterror(true);
        setmailSent(false);
      });
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Contact Me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Form onSubmit={e => handleFormSubmit(e)}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={e => setname(e.target.value)}
              placeholder="Your name"
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={e => setemail(e.target.value)}
              placeholder="Your email"
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              onChange={e => setmessage(e.target.value)}
              value={message}
            ></textarea>
            <Button variant="success" type="submit">
              {!loading ? (
                "Submit"
              ) : (
                <>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />{" "}
                  Loading...
                </>
              )}
            </Button>
            <div>
              {mailSent && (
                <Fade>
                  <div className="sucess">
                    Thanks for reaching out. I'll get back to you as soon as
                    possible.
                  </div>
                </Fade>
              )}
            </div>
            <div>
              {error && (
                <Fade>
                  <div className="danger">
                    Your message was unable to be submitted.
                  </div>
                </Fade>
              )}
            </div>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
