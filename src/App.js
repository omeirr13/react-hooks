import React, { useState, useTransition } from 'react'

export default function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  const [isPending, startTransition] = useTransition();

  //emulating a list that has a lot of data, and time intensive computation, and is happening quite commonly, because we have state changes based on input that are typed
  function handleChange(e) {
    setInput(e.target.value);

    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    })
  }
  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending ? "Loading" : list.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
      <div>App</div>
    </>
  )
}
