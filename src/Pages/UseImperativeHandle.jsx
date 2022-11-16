import '../App.css';
import Header from './Header';
import info from './info.json';
import Footer from './Footer';
import Box from '../Components/Box';
import BoxForward from '../Components/BoxForward';
import BoxImperative from '../Components/BoxImperative';
import randomColor from '../utils/randomColor';
import React, { useRef } from 'react';


const UseImperativeHandle = () => {
  const htmlBox = useRef();
  const htmlBoxForward = useRef();
  const htmlBoxImperative = useRef();

  return (
    <>
    <Header data={info['useImperativeHandle']}/>
    <div className='content flexRow'>
    

    <div>
      <button onClick={() => {
        htmlBox.current.style.backgroundColor = randomColor();
      }}>
        Click me!
      </button>
      <Box ref={htmlBox} text="Box #1" />
    </div>
    

    <div>
      <button onClick={() => {
        htmlBoxForward.current.style.backgroundColor = randomColor();
      }}>
        Click me!
      </button>
      <BoxForward ref={htmlBoxForward} text="Box #2" />
    </div>

    <div>
      <div>
        <button onClick={() => htmlBoxImperative.current.box1()}> + </button>
        <button onClick={() => htmlBoxImperative.current.box2()}> + </button>
        <button onClick={() => htmlBoxImperative.current.box3()}> + </button>
      </div>
      
      <BoxImperative ref={htmlBoxImperative} text="Box #3" />
    </div>
    

    </div>
    <Footer data={info['useImperativeHandle']}/>
  </>
  );
}

export default UseImperativeHandle;
