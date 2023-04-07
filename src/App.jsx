import "./App.css";
import CardContainer from "./components/CardContainer";
import Form from "./components/Form";
import { useState, createContext } from "react";

export const Source = createContext();

function App() {
  const [value, setValue] = useState("jane appleseed");
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [cvc, setCvc] = useState("000");
  const [cardNum, setCardNum] = useState(["0000", "0000", "0000", "0000"]);

  return (
    <Source.Provider
      value={{
        value,
        setValue,
        month,
        setMonth,
        year,
        setYear,
        cvc,
        setCvc,
        cardNum,
        setCardNum,
      }}
    >
      <section className="parent">
        <CardContainer />
        <Form />
      </section>
    </Source.Provider>
  );
}

export default App;
