import { useState } from 'react';
import { ComponentA } from './components/ComponentA';
import { Notification } from './components/Notification';

import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prevState) => prevState + 1);
  };

  console.log(`*** App [${count}]: Rerender ***`);

  return (
    <div className="wrapper">
      <div className="app">
        <Notification />
        <div className="app_title">App</div>
        <div className="app_counter">
          <div className="app_info--label">state</div>
          <div className="app_info--counter"><span>count:</span> {count}</div>
        </div>
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
    </div>
  );
};

export default App;
