"use client";

import bubbleSort from "../../scripts";
import { useState, useEffect } from "react";

const Bubbles = () => {
  const [input, setInput] = useState(0);

  return (
    <>
      <input
        onChange={(event) => setInput(event.target.value)}
        value={input}
        className="text-black"
      ></input>
      <button
        onClick={() => {
          console.log(bubbleSort(Array.from(String(input), Number)));
        }}
      >
        SortMe
      </button>
      {bubbleSort([3, 4, 3, 2, 1]).map((element, index) => (
        <button key={index}>{element.toString()}</button>
      ))}
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

//is this a server??
//bubbleSort(Array.from(String(input), Number))
