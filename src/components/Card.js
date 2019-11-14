import React from "react";
import { Card } from "react-bootstrap";
import "./Card.css";

const infoCard = props => {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src={props.imgsrc} alt="card image" />
        <Card.ImgOverlay className="card-overlay">
          <Card.Title className="card-title text-center">
            {props.title}
          </Card.Title>
          <Card.Text className="card-text text-center">{props.text}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default infoCard;
