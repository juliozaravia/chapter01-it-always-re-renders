import { useFlasher } from '../../hooks/useFlasher';

import './Notification.css'

export const Notification = () => {
  return (
    <div className="notification">
      <span className="notification--hide" ref={useFlasher()}>
        rerender
      </span>
    </div>
  );
};
