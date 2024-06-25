"use client";

import bubbleSort from "../../scripts";
import { useState, useEffect } from "react";

const Bar = ({ height }) => {
  return <div style={{ background: "red", height: `${height}px` }}>abc</div>;
};

const Bubbles = () => {
  const [input, setInput] = useState(0);
  const [barState, setBarState] = useState<Number[] | Number[][]>([]);

  console.log(barState[0]);

  return (
    <>
      <input
        onChange={(event) => setInput(event.target.value)}
        value={input}
        className="text-black"
      ></input>
      <button
        onClick={() => {
          setBarState(bubbleSort(Array.from(String(input), Number)));
        }}
      >
        SortMe
      </button>
      <div>
        {barState[0]?.map((element, index) => (
          <div key={index}>3412</div>
        ))}
      </div>
    </>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Bubbles></Bubbles>
    </main>
  );
}
