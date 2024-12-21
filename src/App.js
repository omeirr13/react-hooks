import React, { useEffect, useRef, useState } from "react";


export default function App() {
  const times = useRef(0);
  useEffect(() => {
    times.current = times.current + 1;
  })
  const [flag, setFlag] = useState(true);

  return (
    <>
      <h2>i rendered {times.current} times!</h2>
      <button onClick={() => setFlag(prev => !prev)}>Click to rerender</button>
    </>
  )
}