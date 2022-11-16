import info from './info.json';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import { useWindowSize } from '../utils/useWindowSize';
import { useWindowSizeDebug } from '../utils/useWindowSizeDebug';
import { useRef, useState } from 'react';


const UseDebugValue = () => {
  const [example, setExample] = useState("This is just an example");
  const exampleRef = useRef();

  const { width, height } = useWindowSize();
  // const { width, height } = useWindowSizeDebug();
  
  return (
    <>
      <Header data={info['useDebugValue']}/>
      <div className='content' ref={exampleRef}>

        <div>{`Width = ${width}px`}</div>
        <div>{`Height = ${height}px`}</div>

        {/* <div>{`Width (debug) = ${width}px`}</div>
        <div>{`Height (debug) = ${height}px`}</div> */}

      </div>
      <Footer data={info['useDebugValue']}/>
    </>
  );
}

export default UseDebugValue;
