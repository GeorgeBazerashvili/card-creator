import React from "react";
import { useContext } from "react";
import { Source } from "../App";

function Form() {
  const source = useContext(Source);

  const userNameChange = (e) => {
    let onlyChars = "";

    if (e.target.value == "") {
      source.setValue("Jane Appleseed");
    } else {
      for (let i = 0; i < e.target.value.length; i++) {
        if (
          isNaN(e.target.value.charAt(i)) ||
          e.target.value.charAt(i) == " "
        ) {
          onlyChars += e.target.value.charAt(i);
        }
      }
      source.setValue(onlyChars);
    }
  };

  const setYear = (e) => {
    source.setYear(Math.floor(Number(e.target.value)));
  };

  const setMonth = (e) => {
    source.setMonth(Math.floor(Number(e.target.value)));
  };

  const cvcChange = (e) => {
    source.setCvc(e.target.value);
  };

  const cardNumChange = (e) => {
    const value = e.target.value.replace(/\s/g, "");

    let newCardNum = [...source.cardNum];

    if (e.target.value == "") {
      source.setCardNum(["0000", "0000", "0000", "0000"]);
    } else {
      let i = 0;

      for (; i < 4 && value.length >= i * 4 + 4; i++) {
        newCardNum[i] = value.substr(i * 4, 4);
      }

      for (; i < 4; i++) {
        newCardNum[i] = "0000";
      }

      source.setCardNum(newCardNum);
    }
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="input1">
          <label htmlFor="input1">
            <p>CARDHOLDER NAME</p>
          </label>
          <input
            data-value={source.value}
            onChange={(e) => userNameChange(e)}
            type="text"
            placeholder="e.g. Jane Apleseed"
            id="input1"
          />
        </div>
        <div className="input2">
          <label htmlFor="input2">
            <p>CARD NUMBER</p>
          </label>
          <input
            onChange={(e) => cardNumChange(e)}
            data-value={source.cardNum}
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            id="input2"
          />
        </div>
        <div className="input-parent3">
          <div className="input3">
            <label>
              <p>EXP.DATE (MM/YY)</p>
            </label>
            <div className="flex-container">
              <input
                data-value={source.month}
                onChange={(e) => setMonth(e)}
                type="number"
                id="month"
                min={1}
                max={12}
                placeholder="MM"
              />
              <input
                data-value={source.year}
                onChange={(e) => setYear(e)}
                type="number"
                id="year"
                min={1960}
                max={new Date().getFullYear()}
                placeholder="YY"
              />
            </div>
          </div>
          <div className="input4">
            <label htmlFor="input3">
              <p>CVC</p>
            </label>
            <input
              data-value={source.cvc}
              onChange={(e) => cvcChange(e)}
              type="text"
              placeholder="e.g. 123"
              id="input3"
              className="cvc"
            />
          </div>
        </div>
        <button className="confirm" type="submit">
          Confirm
        </button>
      </form>
    </>
  );
}

export default Form;
