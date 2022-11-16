import '../App.css';
import Header from './Header';
import info from './info.json';
import Footer from './Footer';
import { useMemo, useState } from 'react';


const UseMemo = () => {
  const [sumLimit, setSumLimit] = useState(10);
  const [name, setName] = useState("Sam");

  const sumOfNumbers = (limit) => {
    let sum = 0;
    for(let i = 1; i < limit + 1; i++) {
      sum += i;
    }
    return sum;
  };

  const memoSum = useMemo(() => sumOfNumbers(sumLimit), [sumLimit]);

  const handleUpdate = (e) => {
    if (isNaN(e.target.value)) {
      setSumLimit(0);
    } else {
      setSumLimit(parseInt(e.target.value));
    }
  }

  return (
    <>
      <Header data={info['useMemo']}/>
      <div className='content'>
        
        <div>{ `The expensive calculation will loop ${sumLimit} times` }</div>
        <input value={sumLimit} onChange={handleUpdate}/>

        <hr />

        <div>{ `The expensive calculation ran and calculated a sum of: ${sumOfNumbers(sumLimit)}` }</div>
        {/* <div>{ `The expensive calculation ran and calculated a sum of: ${memoSum}` }</div> */}

        <hr />

        <div>{ `Unrelated input... my name is ${name}` }</div>
        <input value={name} onChange={(e) => setName(e.target.value)}/>


      </div>
      <Footer data={info['useMemo']}/>
    </>
    );
}

export default UseMemo;
