import { useState } from "react";

import "../../assets/styles/global.css";

export const ComponentG = () => {
  const [, setCount] = useState(0);

  const handleCount = () => {
    setCount((oldCount) => oldCount + 1);
  };

  console.log("Component G: Rerender");

  return (
    <div className="genericComponent genericComponent--nested">
      <div className="genericComponent_title">Component G</div>
      <button
        className="app_button"
        name="btn-count"
        onClick={handleCount}
        type="button"
      >
        Update state
      </button>
    </div>
  );
};
