import { useState } from "react";
import Button from "./components/button";

function App() {
  return (
    <main className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 h-screen flex items-center justify-center">
      <div className="calculator-box grid  w-[27rem] gap-3">
        <div className="output-box bg-black border-2 border-white rounded-md h-28 text-white text-right font-bold p-4 text-2xl">
          <div className="previous-operand">12345</div>
          <div className="current-operant">6789</div>
        </div>
        <div className="buttons-box grid grid-cols-4 gap-2">
          <Button value={"CLR"} additionalClasses={"col-span-2"} />
          <Button value={"DEL"} />
          <Button
            value={"÷"}
            additionalClasses={"bg-orange-300 hover:bg-orange-400"}
          />
          <Button value={1} />
          <Button value={2} />
          <Button value={3} />
          <Button
            value={"*"}
            additionalClasses={"bg-orange-300 hover:bg-orange-400"}
          />
          <Button value={4} />
          <Button value={5} />
          <Button value={6} />
          <Button
            value={"+"}
            additionalClasses={"bg-orange-300 hover:bg-orange-400"}
          />
          <Button value={7} />
          <Button value={8} />
          <Button value={9} />
          <Button
            value={"-"}
            additionalClasses={"bg-orange-300 hover:bg-orange-400"}
          />
          <Button value={0} />
          <Button value={"."} />
          <Button value={"="} additionalClasses={"col-span-2 "} />
        </div>
      </div>
    </main>
  );
}

export default App;
