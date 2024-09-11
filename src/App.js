import "./App.css";
import Button from "./component/Button";
import Inputfield from "./component/Inputfield";

function App() {
  return (
    <div className="App">
      React Calculator
      <div>
        <Inputfield />
        <Button />
      </div>
    </div>
  );
}

export default App;
