import React from "react";
import { Card } from "react-bootstrap";

const infoCard = props => {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src={props.imgsrc} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default infoCard;
