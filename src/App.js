import './App.css';
import Sidebar from './Components/Sidebar';
import UseState from './Pages/UseState';
import { Route, Routes } from "react-router-dom";
import UseEffect from './Pages/UseEffect';
import UseCallback from './Pages/UseCallback';
import UseContext from './Pages/UseContext';
import UseDebugValue from './Pages/UseDebugValue';
import UseDeferredValue from './Pages/UseDeferredValue';
import UseId from './Pages/UseId';
import UseImperativeHandle from './Pages/UseImperativeHandle';
import UseInsertionEffect from './Pages/UseInsertionEffect';
import UseLayoutEffect from './Pages/UseLayoutEffect';
import UseMemo from './Pages/UseMemo';
import UseReducer from './Pages/UseReducer';
import UseRef from './Pages/UseRef';
import UseSyncExternalStore from './Pages/UseSyncExternalStore';
import UseTransition from './Pages/UseTransition';


const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className='pageWrapper'>
        <Routes>
          <Route path="/" element={(<UseState />)} exact />
          <Route path="/useEffect" element={(<UseEffect />)} exact />
          <Route path="/useCallback" element={(<UseCallback />)} exact />
          <Route path="/useContext" element={(<UseContext />)} exact />
          <Route path="/useDebugValue" element={(<UseDebugValue />)} exact />
          <Route path="/useDeferredValue" element={(<UseDeferredValue />)} exact />
          <Route path="/useId" element={(<UseId />)} exact />
          <Route path="/useImperativeHandle" element={(<UseImperativeHandle />)} exact />
          <Route path="/useInsertionEffect" element={(<UseInsertionEffect />)} exact />
          <Route path="/useLayoutEffect" element={(<UseLayoutEffect />)} exact />
          <Route path="/useMemo" element={(<UseMemo />)} exact />
          <Route path="/useReducer" element={(<UseReducer />)} exact />
          <Route path="/useRef" element={(<UseRef />)} exact />
          <Route path="/useSyncExternalStore" element={(<UseSyncExternalStore />)} exact />
          <Route path="/useTransition" element={(<UseTransition />)} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
