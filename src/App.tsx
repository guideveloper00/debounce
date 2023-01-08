import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Input } from "./components/input";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isInputValid, setIsInputValid] = useState(false);
  const [validationText, setValidationText] = useState("");

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (inputValue.length >= 5) {
        setIsInputValid(true);
        setValidationText("valid");
      } else if (inputValue.length >= 1 && inputValue.length < 5) {
        setIsInputValid(false);
        setValidationText("invalid");
      } else if (inputValue.length === 0) {
        setIsInputValid(false);
        setValidationText("");
      }
    }, 800);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [inputValue]);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Input setInputValue={setInputValue} />
        <p>{validationText}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
