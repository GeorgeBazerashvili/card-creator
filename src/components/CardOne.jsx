import React, { useContext } from "react";
import { Source } from "../App";

function CardOne() {
  const source = useContext(Source);
  return (
    <>
      <div className="card">
        <p className="card-nums">{`${source.cardNum[0]} ${source.cardNum[1]} ${source.cardNum[2]} ${source.cardNum[3]}`}</p>
        <div className="more-info">
          <h3 className="name">{source.value.toUpperCase()}</h3>
          <h3 className="date">{`${
            (source.month < 0 && source.setMonth("0")) ||
            (source.month > 12 ? source.setMonth("12") : source.month)
          }/${
            source.year > new Date().getFullYear()
              ? source.setYear(new Date().getFullYear())
              : source.year
          }`}</h3>
        </div>
      </div>
    </>
  );
}
export default CardOne;
