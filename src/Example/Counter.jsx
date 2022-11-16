import '../App.css';
import { useState } from 'react';


const UseReducer = () => {
  const [count, setCount] = useState(0);

  const increment = () => { setCount(count + 1) }
  const decrement = () => { setCount(count - 1) }

  return (
    <>
      <div className='content'>
        
        <button onClick={decrement}> - </button>
        <div> { count } </div>
        <button onClick={increment}> + </button>

      </div>
    </>
  );
}

export default UseReducer;
