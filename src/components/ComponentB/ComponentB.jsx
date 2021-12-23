import { useState } from "react";
import { ComponentC } from "../ComponentC";
import { Notification } from "../Notification";

import "../../assets/styles/global.css";

export const ComponentB = () => {
  const [, setCount] = useState(0);

  const handleCount = () => {
    setCount((oldCount) => oldCount + 1);
  };

  console.log("Component B: Rerender");

  return (
    <div className="genericComponent genericComponent--nested">
      <Notification />
      <div className="genericComponent_title">Component B</div>
      <button
        className="app_button"
        name="btn-count"
        onClick={handleCount}
        type="button"
      >
        Update state
      </button>
      <ComponentC />
    </div>
  );
};
