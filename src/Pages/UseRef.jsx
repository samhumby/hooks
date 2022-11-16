import '../App.css';
import Header from './Header';
import info from './info.json';
import Footer from './Footer';
import { useEffect, useRef, useState } from 'react';
import randomColor from '../utils/randomColor';


const UseRef = () => {
  const [name, setName] = useState("Sam");
  const [number, setNumber] = useState(0);
  
  // { current: 0 }
  const timesRendered = useRef(0);
  const htmlBox = useRef();
  const previousNumber = useRef('-');

  // Run each time the component renders
  useEffect(() => {
    timesRendered.current = timesRendered.current + 1;
  });

  useEffect(() => {
    if (!isNaN(number)) {
      previousNumber.current = number;
    }
  }, [number]);

  return (
    <>
      <Header data={info['useRef']}/>
      <div className='content'>
        
        <input value={name} onChange={e => setName(e.target.value)}/>
        <div>{ `My name is ${name}` }</div>

        <hr />

        <div>{ `This has rendered ${timesRendered.current} times` }</div>

        <div ref={htmlBox} className="refBox">
          I am a box
        </div>

        <button onClick={() => {
          console.log(htmlBox.current);
          htmlBox.current.style.backgroundColor = randomColor();
        }}>
          Click me!
        </button>

        <hr />

        <input value={number} onChange={e => setNumber(e.target.value)}/>
        <div>{ `Number is ${number} and previous number was ${previousNumber.current}` }</div>

      </div>
      <Footer data={info['useRef']}/>
    </>
  );
}

export default UseRef;
