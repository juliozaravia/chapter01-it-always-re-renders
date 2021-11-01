import { memo, useState } from "react";

import "../../assets/styles/global.css";

const ComponentC = () => {
  const [, setCount] = useState(0);

  const handleCount = () => {
    setCount((oldCount) => oldCount + 1);
  };

  console.log("Component C: Rerender");

  return (
    <div className="genericComponent genericComponent--nested">
      <div className="genericComponent_title genericComponent_title--memo">
        memo(<span>Component C</span>)
      </div>
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

export const MemoComponentC = memo(ComponentC);
