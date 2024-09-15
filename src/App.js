import "./App.css";
import Button from "./component/Button";
import Inputfield from "./component/Inputfield";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  // Handle button clicks
  const handleClick = (value) => {
    if (value === "C") {
      setNumber("");
      setResult("");
    } else if (value === "=") {
      if (number === "") {
        setResult("Error");
      } else {
        try {
          const calculatedResult = eval(number);
          if (calculatedResult === Infinity) {
            setResult("Infinity");
          } else if (isNaN(calculatedResult)) {
            setResult("NaN");
          } else {
            setResult(calculatedResult);
          }
        } catch {
          setResult("Error");
        }
      }
    } else {
      setNumber(number + value);
    }
  };
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <Inputfield n2={number} />
      {result && <div className="result"> {result}</div>}{" "}
      <Button handleClick={handleClick} />
    </div>
  );
}

export default App;
