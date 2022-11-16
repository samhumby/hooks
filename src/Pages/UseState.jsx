import { useContext, useState } from 'react';
import '../App.css';
import Header from './Header';
import info from './info.json';
import Footer from './Footer';
import { ThemeContext } from '../App';

const UseState = () => {
  const darkMode = useContext(ThemeContext);

  
  const [item, setItem] = useState("Initial Value");

  return (
    <>
      <Header data={info['useState']}/>
      <div className={!darkMode ? 'content' : 'contentDark'}>

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
