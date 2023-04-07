import React from "react";
import { useContext } from "react";
import { Source } from "../App";

function CardTwo() {
  const source = useContext(Source);
  return (
    <>
      <div className="card2">
        <p>
          {source.cvc.length > 3
            ? source.setCvc("999")
            : source.cvc || (source.cvc.length == 0 && source.setCvc("000"))}
        </p>
      </div>
    </>
  );
}

export default CardTwo;
