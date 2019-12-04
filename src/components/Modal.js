import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Modal.css";

export default function MyVerticallyCenteredModal(props) {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("submitted", fname, lname, email, message);
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
          <form action="#">
            <label>First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              value={fname}
              onChange={e => setfname(e.target.value)}
            />
            <label>Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              value={lname}
              onChange={e => setlname(e.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={e => setemail(e.target.value)}
            />

            <label>Message</label>
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
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
