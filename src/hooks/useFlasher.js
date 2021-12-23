import { useEffect, useRef } from 'react';

export const useFlasher = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.classList.remove('notification--hide');
    ref.current.classList.add('notification--show');
    const timer = setTimeout(() => {
      if (!ref.current) return;
      ref.current.classList.remove('notification--show');
      ref.current.classList.add('notification--hide');
    }, 1000);
    return () => clearTimeout(timer);
  });
  return ref;
};
