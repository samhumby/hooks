import '../App.css';
import Header from './Header';
import info from './info.json';
import Footer from './Footer';
import { useState, useTransition, useRef, useEffect } from 'react';

const UseTransition = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const [input2, setInput2] = useState("");
  const [list2, setList2] = useState([]);

  // Count page renders
  const timesRendered = useRef(0);
  useEffect(() => {
    timesRendered.current = timesRendered.current + 1;
  });


  const LIST_SIZE = 20000;

  // isPending = true/false depending on if the data is being rendered
  const [isPending, startTransition] = useTransition();

  // Without transition
  const handleChange = (e) => {
    setInput(e.target.value);
    const newList = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      newList.push(e.target.value);
    };
    setList(newList);
  }

   // With transition
   const handleChangeTransition = (e) => {
    
    // High priority
    setInput2(e.target.value);

    // Low priority
    startTransition(() => {
      const newList = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        newList.push(e.target.value);
      };
      setList2(newList);
    });
  }

  return (
    <>
      <Header data={info['useTransition']}/>
      <div className='content'>

        <div>{ `This has rendered ${timesRendered.current} times` }</div>
        <hr />

        <div>Without transition</div>
        <input value={input} onChange={handleChange} />

        <hr/>

        <div>With transition</div>
        <input value={input2} onChange={handleChangeTransition} />

        <hr/>

        <div style={{maxWidth: 600, overflowWrap: 'anywhere'}}>
          {
            list.length > 0 && list.map((item) => item)
          }
          {
            !isPending && list2.map((item) => item)
          }
        </div>

      </div>
      <Footer data={info['useTransition']}/>
    </>
    );
}

export default UseTransition;
