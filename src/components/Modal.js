import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Modal.css";
import axios from "axios";
import qs from "qs";
import Fade from "react-reveal/Fade";

export default function MyVerticallyCenteredModal(props) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [mailSent, setmailSent] = useState(false);
  const [error, seterror] = useState(null);

  function handleFormSubmit(event) {
    event.preventDefault();

    const form = {
      name: name,
      email: email,
      message: message
    };

    axios
      .post(process.env.REACT_APP_API_URL, qs.stringify(form))
      .then(response => {
        console.log(response);
        setmailSent(true);
        seterror(null);
        setname("");
        setemail("");
        setmessage("");
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
        <h4>Centered Modal</h4>
        <div>
          <form name="myemailform" action="form-to-email.php">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              value={name}
              onChange={e => setname(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={e => setemail(e.target.value)}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write something.."
              onChange={e => setmessage(e.target.value)}
              value={message}
            ></textarea>
            <input
              type="submit"
              onClick={e => handleFormSubmit(e)}
              value="Submit"
            />
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
                  <div className="danger">I'm sorry, an error has occured.</div>
                </Fade>
              )}
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
