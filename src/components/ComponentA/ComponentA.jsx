import { useState } from "react";
import { MemoComponentB } from "../ComponentB";

import "../../assets/styles/global.css";

export const ComponentA = () => {
  const [, setCount] = useState(0);

  const handleCount = () => {
    setCount((oldCount) => oldCount + 1);
  };

  console.log("Component A: Rerender");

  return (
    <div className="genericComponent genericComponent--nested">
      <div className="genericComponent_title">Component A</div>
      <button
        className="app_button"
        name="btn-count"
        onClick={handleCount}
        type="button"
      >
        Update state
      </button>
      <MemoComponentB />
    </div>
  );
};
