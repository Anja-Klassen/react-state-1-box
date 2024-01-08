import "./styles.css";

import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  //let isActive = false;

  function handleClick() {
    setIsActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Activate" : "Deactivate"}
      </button>
    </main>
  );
}

//Can you use your newly created state to toggle the text on the button itself between
//"Activate" and "Deactivate"?
