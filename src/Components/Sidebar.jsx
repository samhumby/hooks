import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

const Sidebar = ({setDarkTheme}) => {
  const darkMode = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkTheme(!darkMode)
  };

  return (
    <div className="sidebar">
      <ol className="links">
        <li><Link to="/">useState</Link></li>
        <li><Link to="/useEffect">useEffect</Link></li>
        <li><Link to="/useLayoutEffect">useLayoutEffect</Link></li>
        <li><Link to="/useInsertionEffect">useInsertionEffect</Link></li>
        <li><Link to="/useContext">useContext</Link></li>
        <li><Link to="/useReducer">useReducer</Link></li>
        <li><Link to="/useMemo">useMemo</Link></li>
        <li><Link to="/useCallback">useCallback</Link></li>
        <li><Link to="/useRef">useRef</Link></li>
        <li><Link to="/useImperativeHandle">useImperativeHandle</Link></li>
        <li><Link to="/useDeferredValue">useDeferredValue</Link></li>
        <li><Link to="/useTransition">useTransition</Link></li>
        <li><Link to="/useId">useId</Link></li>
        <li><Link to="/useSyncExternalStore">useSyncExternalStore</Link></li>
        <li><Link to="/useDebugValue">useDebugValue</Link></li>
      </ol>

      <div className="darkMode">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />  
        <label htmlFor="vehicle1"> Dark mode</label><br></br>
      </div>
    </div>
  );
}

export default Sidebar;
