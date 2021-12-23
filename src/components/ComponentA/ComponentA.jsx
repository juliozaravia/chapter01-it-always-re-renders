import { useState } from "react";
import { ComponentB } from "../ComponentB";
import { Notification } from "../Notification";

import "../../assets/styles/global.css";

export const ComponentA = () => {
  const [, setCount] = useState(0);

  const handleCount = () => {
    setCount((prevState) => prevState + 1);
  };

  console.log("Component A: Rerender");

  return (
    <div className="genericComponent genericComponent--nested">
      <Notification />
      <div className="genericComponent_title">Component A</div>
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
