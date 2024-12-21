import React, { useEffect, useState } from "react";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  //on mount we are adding the event listener, so we can dynamically update the value throughout the rest of our app.
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  return (
    <div>
      {windowWidth}
    </div>
  )
}