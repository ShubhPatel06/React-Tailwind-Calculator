import { useState } from "react";
import Button from "./components/button";

function App() {
  const [calc, setCalc] = useState({
    firstOperand: "",
    operation: "",
    secondOperand: "",
  });

  const handleNumClick = (val) => {
    if (calc.operation === "") {
      setCalc({ ...calc, firstOperand: calc.firstOperand + val });
    } else {
      setCalc({ ...calc, secondOperand: calc.secondOperand + val });
    }
  };

  const handleOperationClick = (val) => {
    if (calc.firstOperand !== "") {
      switch (val) {
        case "+":
          setCalc({ ...calc, operation: "+" });
        case "-":
          setCalc({ ...calc, operation: "-" });
        case "*":
          setCalc({ ...calc, operation: "*" });
        case "÷":
          setCalc({ ...calc, operation: "÷" });
        default:
          calc.operation;
      }
    }
  };

  const handleClear = () => {
    setCalc({ calc, firstOperand: "", operation: "", secondOperand: "" });
  };

  return (
    <main className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 h-screen flex items-center justify-center">
      <div className="calculator-box grid  w-[27rem] gap-3">
        <div className="output-box bg-black border-2 border-white rounded-md h-28 text-white text-right font-bold p-4 text-2xl">
          <div className="previous-operand">{calc.firstOperand}</div>
          <div className="previous-operand">{calc.operation}</div>
          <div className="current-operant">{calc.secondOperand}</div>
        </div>
        <div className="buttons-box grid grid-cols-4 gap-2">
          <Button
            value={"CLR"}
            additionalClasses={"col-span-2 bg-white p-5 hover:bg-slate-200"}
            onClick={handleClear}
          />
          <Button value={"DEL"} />
          <Button
            value={"÷"}
            additionalClasses={"bg-orange-300 hover:bg-orange-400"}
            onClick={() => {
              handleOperationClick("÷");
            }}
          />
          <Button
            value={1}
            onClick={() => {
              handleNumClick(1);
            }}
          />
          <Button
            value={2}
            onClick={() => {
              handleNumClick(2);
            }}
          />
          <Button
            value={3}
            onClick={() => {
              handleNumClick(3);
            }}
          />
          <Button
            value={"*"}
            additionalClasses={"bg-orange-300 hover:bg-orange-400"}
            onClick={() => {
              handleOperationClick("*");
            }}
          />
          <Button
            value={4}
            onClick={() => {
              handleNumClick(4);
            }}
          />
          <Button
            value={5}
            onClick={() => {
              handleNumClick(5);
            }}
          />
          <Button
            value={6}
            onClick={() => {
              handleNumClick(6);
            }}
          />
          <Button
            value={"+"}
            additionalClasses={"bg-orange-300 hover:bg-orange-400"}
            onClick={() => {
              handleOperationClick("+");
            }}
          />
          <Button
            value={7}
            onClick={() => {
              handleNumClick(7);
            }}
          />
          <Button
            value={8}
            onClick={() => {
              handleNumClick(8);
            }}
          />
          <Button
            value={9}
            onClick={() => {
              handleNumClick(9);
            }}
          />
          <Button
            value={"-"}
            additionalClasses={"bg-orange-300 hover:bg-orange-400"}
            onClick={() => {
              handleOperationClick("-");
            }}
          />
          <Button
            value={0}
            onClick={() => {
              handleNumClick(0);
            }}
          />
          <Button value={"."} />
          <Button
            value={"="}
            additionalClasses={"col-span-2 bg-white p-5 hover:bg-slate-200"}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
