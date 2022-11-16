import { useDebugValue, useEffect, useState } from "react"

// With useDebugValue
export const useWindowSizeDebug = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useDebugValue(windowSize);

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