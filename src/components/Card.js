import React from "react";
import { Card } from "react-bootstrap";
import "./Card.css";

const infoCard = props => {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src={props.imgsrc} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="CardTitle">{props.title}</Card.Title>
          <Card.Text className="CardText">{props.text}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default infoCard;
