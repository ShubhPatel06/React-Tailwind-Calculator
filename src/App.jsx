import { useState } from "react";
import Button from "./components/button";

function App() {
  const [calc, setCalc] = useState({
    firstOperand: "",
    operation: "",
    secondOperand: "",
    result: "",
  });

  const handleNumClick = (val) => {
    if (val === "." && calc.operation === "") {
      // Add decimal point to the first operand
      if (!calc.firstOperand.includes(".") && calc.firstOperand.length < 16) {
        setCalc({ ...calc, firstOperand: calc.firstOperand + val });
      }
    } else if (val === "." && calc.operation !== "") {
      // Add decimal point to the second operand
      if (!calc.secondOperand.includes(".") && calc.secondOperand.length < 16) {
        setCalc({ ...calc, secondOperand: calc.secondOperand + val });
      }
    } else {
      if (calc.operation === "") {
        // Limit first operand to 16 digits
        if (calc.firstOperand.length < 16) {
          setCalc({ ...calc, firstOperand: calc.firstOperand + val });
        }
      } else {
        // Limit second operand to 16 digits
        if (calc.secondOperand.length < 16) {
          setCalc({ ...calc, secondOperand: calc.secondOperand + val });
        }
      }
    }
  };

  const handleOperationClick = (val) => {
    if (calc.firstOperand !== "") {
      switch (val) {
        case "+":
          setCalc({ ...calc, operation: "+" });
          break;

        case "-":
          setCalc({ ...calc, operation: "-" });
          break;

        case "*":
          setCalc({ ...calc, operation: "*" });
          break;

        case "÷":
          setCalc({ ...calc, operation: "÷" });
          break;

        default:
          calc.operation;
      }
    }
  };

  const handleClear = () => {
    setCalc({
      calc,
      firstOperand: "",
      operation: "",
      secondOperand: "",
      result: "",
    });
  };

  const handleDelete = () => {
    if (calc.secondOperand !== "") {
      // Delete the last character from the second operand
      setCalc({ ...calc, secondOperand: calc.secondOperand.slice(0, -1) });
    } else if (calc.operation !== "") {
      // Remove the operation
      setCalc({ ...calc, operation: "" });
    } else if (calc.firstOperand !== "") {
      // Delete the last character from the first operand
      setCalc({ ...calc, firstOperand: calc.firstOperand.slice(0, -1) });
    }
  };

  const handleCalculate = () => {
    if (
      calc.firstOperand !== "" &&
      calc.operation !== "" &&
      calc.secondOperand !== ""
    ) {
      const firstNum = parseFloat(calc.firstOperand);
      const secondNum = parseFloat(calc.secondOperand);

      if (calc.operation === "+") {
        setCalc({ ...calc, result: (firstNum + secondNum).toString() });
      } else if (calc.operation === "-") {
        setCalc({ ...calc, result: (firstNum - secondNum).toString() });
      } else if (calc.operation === "*") {
        setCalc({ ...calc, result: (firstNum * secondNum).toString() });
      } else if (calc.operation === "÷") {
        // Check for division by zero
        if (secondNum === 0) {
          setCalc({ ...calc, result: "Error: Division by zero" });
        } else {
          setCalc({ ...calc, result: (firstNum / secondNum).toString() });
        }
      }
    }
  };

  return (
    <main className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 h-screen flex items-center justify-center">
      <div className="calculator-box grid  w-[27rem] gap-3">
        <div className="output-box bg-black border-2 border-white rounded-md h-28 text-white text-right font-bold p-4 text-2xl inline">
          <div className="previous-operand">
            {calc.firstOperand} {calc.operation} {calc.secondOperand}
          </div>
          <div className="current-operand">{calc.result}</div>
        </div>
        <div className="buttons-box grid grid-cols-4 gap-2">
          <Button
            value={"CLR"}
            additionalClasses={"col-span-2 bg-white p-5 hover:bg-slate-200"}
            onClick={handleClear}
          />
          <Button value={"DEL"} onClick={handleDelete} />
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
          <Button
            value={"."}
            onClick={() => {
              handleNumClick(".");
            }}
          />
          <Button
            value={"="}
            additionalClasses={"col-span-2 bg-white p-5 hover:bg-slate-200"}
            onClick={handleCalculate}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
