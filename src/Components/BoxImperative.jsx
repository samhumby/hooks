import '../App.css';
import React, { useImperativeHandle, useRef } from 'react';
import randomColor from '../utils/randomColor';

// Forwarding the ref to the inner div
const BoxImperative = ({text}, ref) => {
  
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();

  useImperativeHandle(
    ref,
      () => {
        return { 
          box1: () => box1.current && (box1.current.style.backgroundColor = randomColor()),
          box2: () => box2.current && (box2.current.style.backgroundColor = randomColor()),
          box3: () => box3.current && (box3.current.style.backgroundColor = randomColor())
        }
      },
      []
  );

  return (
    <div className="boxImperative">

      <div className="refBox" ref={box1}>
        { text }
      </div>
      
      <div className="refBox" ref={box2}>
        { text }
      </div>

      <div className="refBox" ref={box3}>
        { text }
      </div>
      
    </div>
  );
};

export default React.forwardRef(BoxImperative);
