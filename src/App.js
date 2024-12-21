import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function func() {
  console.log("ok");
  return 4;
}
function App() {
  const [count, setCount] = useState(() => {
    console.log("run function");
    return 4;
  });

  const [count2, setCount2] = useState(() => func());

  return (
    <>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
      <button>{count}</button>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
    </>
  );
}

export default App;
