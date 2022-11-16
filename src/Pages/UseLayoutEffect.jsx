import '../App.css';
import Header from './Header';
import info from './info.json';
import Footer from './Footer';
import { useEffect, useRef, useState } from 'react';


const UseLayoutEffect = () => {
  const [text, setText] = useState("");

  const inputRef = useRef();
  

  useEffect(() => {
    if (inputRef.current == null) return
    const { width } = inputRef.current.getBoundingClientRect();
    console.log(`useEffect width = ${width}`);
  }, [text]);

  return (
    <>
      <Header data={info['useLayoutEffect']}/>
      <div className='content'>

        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <div className="useEffectBox" ref={inputRef}> {text} </div>

        <div>
          <img src="https://raw.githubusercontent.com/donavon/hook-flow/master/hook-flow.png" style={{width: 500}}/>
        </div>
        
      </div>
      <Footer data={info['useLayoutEffect']}/>
    </>
  );
}

export default UseLayoutEffect;
