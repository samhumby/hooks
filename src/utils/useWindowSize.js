import { useDebugValue, useEffect, useState } from "react"

// Without useDebugValue
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener('resize', (event) => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, true);
  }, []);

  return windowSize;
}