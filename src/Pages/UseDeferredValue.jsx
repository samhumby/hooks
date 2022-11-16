import '../App.css';
import Header from './Header';
import info from './info.json';
import Footer from './Footer';
import { useState, useDeferredValue, useMemo } from 'react';


const UseDeferredValue = () => {
  const LIST_SIZE = 20000;

  const [input, setInput] = useState("");
  const getList = useMemo(() => {
    const list = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      list.push(input);
    };
    return list;
  }, [input]);



  const [input2, setInput2] = useState("");
  const deferredInput = useDeferredValue(input2);
  
  const getList2 = useMemo(() => {
    const list = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      list.push(deferredInput);
    };
    return list;
  }, [deferredInput]);


  return (
    <>
    <Header data={info['useDeferredValue']}/>
    <div className='content'>
      
        <div>Without transition</div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />

        <hr/>

        <div>With transition</div>
        <input value={input2} onChange={(e) => setInput2(e.target.value)} />

        <div style={{maxWidth: 600, overflowWrap: 'anywhere'}}>
          {
            getList.length > 0 && getList.map((item) => item)
          }
          {
            getList2.length > 0 && getList2.map((item) => item)
          }
        </div>


    </div>
    <Footer data={info['useDeferredValue']}/>
  </>
  );
}

export default UseDeferredValue;
