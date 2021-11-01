import { useState } from "react";
import { ComponentA } from "./components/ComponentA";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((oldCount) => oldCount + 1);
  };

  console.log(`*** App [${count}]: Rerender ***`);

  return (
    <div className="app">
      <div className="app_title">App count: {count}</div>
      <button
        className="app_button"
        name="btn-count"
        onClick={handleCount}
        type="button"
      >
        Update state
      </button>
      <ComponentA />
    </div>
  );
};

export default App;
