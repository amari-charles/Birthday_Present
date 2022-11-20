import { useState } from "react";

import Card from "react-bootstrap/Card";

import "./CardFront.css";

function CardFront(props) {
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const presentColors = [
    "#fe3a1a",
    "#ff7be6",
    "#64adb9",
    "#76d564",
    "#ee8507",
    "#5bbcee",
    "#39a464",
    "#a96cff",
    "#ffd4c9",
  ];
  let [presentNumber, setPresentNumber] = useState(randomIntFromInterval(1, 9));
  return (
    <div onClick={props.onClick}>
      <Card
        border="Primary"
        style={{
          width: "18rem",
          height: "16rem",
          color: "red",
          fontWeight: "bolder",
        }}
      >
        <Card.Body
          style={{
            backgroundColor: presentColors[presentNumber - 1],
            color: "white",
            borderTopLeftRadius: "0.32rem",
            borderTopRightRadius: "0.32rem",
          }}
        >
          <Card.Title>{props.name}'s Card</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Img
            className="present"
            src={require("./../assets/presents/Present_"
              .concat(presentNumber.toString())
              .concat(".png"))}
          ></Card.Img>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardFront;
