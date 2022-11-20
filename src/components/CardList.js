import React, { useEffect, useState, Fragment } from "react";
import Papa from "papaparse";

import "./CardList.css";
import CardItem from "./CardItem";
import ConfettiPop from "./ConfettiPop";
import Confetti from "react-confetti";

function CardList() {
  const [data, setData] = useState({});
  Papa.parse(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vScT5VOT7HoTVc7WYgiaz4hRdzhj0_UjByHde52OWcGJAHJy7Sv7W_PgbdzpCypwfSPXyhgS8B8hgXA/pub?output=csv",
    {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    }
  );
  const cards = Array.from(data);

  return (
    <div className="cards-container">
      {cards.map((data, i) => (
        <CardItem name={data.Name} message={data.Message} />
      ))}
    </div>
  );
}

export default CardList;
