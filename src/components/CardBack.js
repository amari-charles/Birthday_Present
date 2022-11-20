import Card from "react-bootstrap/Card";

function CardBack(props) {
  return (
    <div onClick={props.onClick}>
      <Card
        style={{
          width: "18rem",
          height: "16rem",
          overflow: "scroll",
          scrollPaddingBottom: "1rem",
        }}
      >
        <Card.Body>
          <Card.Text>
            <br />
            {props.message}
          </Card.Text>
          <Card.Text>
            Sincerely,
            <br />
            {props.name}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardBack;
