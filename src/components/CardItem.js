import CardBack from "./CardBack";
import CardFront from "./CardFront";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import ConfettiPop from "./ConfettiPop";
import "./CardItem.css";

class CardItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div className="card-container">
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
        >
          <CardFront
            name={this.props.name}
            onClick={this.handleClick}
          ></CardFront>
          <CardBack
            name={this.props.name}
            message={this.props.message}
            onClick={this.handleClick}
          ></CardBack>
        </ReactCardFlip>
      </div>
    );
  }
}

export default CardItem;
