"use client";

import bubbleSort from "../../scripts";
import { useState, useEffect, ChangeEvent } from "react";

/*
interface inputProps {
  setData: React.Dispatch<React.SetStateAction<string>>;
    
  data.steps
}
*/

const Bars = ({ data }) => {
  const [step, setStep] = useState(0);

  console.log(data);

  return (
    <>
      <button
        onClick={() => {
          if (step > 0) {
            setStep(step - 1);
          }
        }}
      >
        Step Out
      </button>
      <button
        onClick={() => {
          if (step < data.steps.length - 1) {
            setStep(step + 1);
          }
        }}
      >
        Step In
      </button>

      <div style={{ display: "flex" }}>
        {data.steps[step].map((element) => (
          <div
            style={{
              background: "green",
              height: `${(element * 10).toString()}px`,
            }}
          >
            a
          </div>
        ))}
      </div>
    </>
  );
};

//creates and submits the input to bubblesort
const Input = ({ setData }) => {
  const [input, setInput] = useState<number[]>([]);

  //converts string event.target.value to Int[], checking for Nan
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const integer = parseInt(event.target.value);
    if (typeof integer === "number" && !Number.isNaN(integer)) {
      setInput(Array.from(String(integer), Number));
    }
  };

  return (
    <div>
      {/* onChange sends events to a callback function */}
      <input onChange={inputHandler}></input>
      <button onClick={() => setData(bubbleSort(input))}> BubbleSort! </button>
    </div>
  );
};

const Display = () => {
  const [data, setData] = useState({});
  if (Object.keys(data).length === 0) {
    return (
      <div>
        <Input setData={setData}></Input>
      </div>
    );
  } else {
    return (
      <div>
        <Input setData={setData}></Input>
        <Bars data={data}></Bars>
      </div>
    );
  }
};

export default function Home() {
  return (
    <main>
      <Display></Display>
    </main>
  );
}
