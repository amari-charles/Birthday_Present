import { useRef, useState, useEffect } from "react";
import Confetti from "react-confetti";

function ConfettiPop() {
  const boxRef = useRef();

  return (
    <div>
      <Confetti recycle={false} numberOfPieces={200} />
    </div>
  );
}

export default ConfettiPop;
