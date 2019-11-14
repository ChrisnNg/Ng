import React from "react";
import { Card } from "react-bootstrap";
import "./Card.css";

const infoCard = props => {
  return (
    <>
      <Card className="bg-dark text-white card">
        <Card.Img src={props.imgsrc} alt="card image" />
        <Card.ImgOverlay>
          <Card.Title className="card-title">
            <h3>{props.title}</h3>
          </Card.Title>
          <Card.Text className="card-text">{props.text}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default infoCard;
