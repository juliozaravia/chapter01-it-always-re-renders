import { memo, useState } from "react";
import { ComponentB } from "../ComponentB";

import "../../assets/styles/global.css";

const ComponentA = () => {
  const [, setCount] = useState(0);

  const handleCount = () => {
    setCount((oldCount) => oldCount + 1);
  };

  console.log("Component A: Rerender");

  return (
    <div className="genericComponent genericComponent--nested">
      <div className="genericComponent_title genericComponent_title--memo">
        memo(<span>Component A</span>)
      </div>
      <button
        className="app_button"
        name="btn-count"
        onClick={handleCount}
        type="button"
      >
        Update state
      </button>
      <ComponentB />
    </div>
  );
};

export const MemoComponentA = memo(ComponentA);
