import { useState } from 'react';
import '../App.css';
import Header from './Header';
import info from './info.json';
import Footer from './Footer';

const UseState = () => {
  // useState take in a vale that is set to the initial state
  // useState returns an array, the first item being the value and the second being a function to change the value

  const [item, setItem] = useState("Initial Value");

  return (
    <>
      <Header data={info['useState']}/>
      <div className='content'>

        <div>{`Value = "${item}"`}</div>

        <hr />

        <label htmlFor="form">Use this to change the state: </label>
        <input type="text" name="form" id="form" value={item} onChange={(e) => setItem(e.target.value)} />

      </div>
      <Footer data={info['useState']}/>
    </>
  );
}

export default UseState;
