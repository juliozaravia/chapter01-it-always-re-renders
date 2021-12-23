import { useState } from "react";
import { Notification } from "../Notification";

import "../../assets/styles/global.css";

export const ComponentC = () => {
  const [, setCount] = useState(0);

  const handleCount = () => {
    setCount((prevState) => prevState + 1);
  };

  console.log("Component C: Rerender");

  return (
    <div className="genericComponent genericComponent--nested">
      <Notification />
      <div className="genericComponent_title">Component C</div>
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
