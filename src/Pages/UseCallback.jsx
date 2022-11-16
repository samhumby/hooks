import '../App.css';
import Header from './Header';
import info from './info.json';
import Footer from './Footer';
import List from '../Components/List';
import { useCallback, useState } from 'react';


const UseCallback = () => {
  const [name, setName] = useState("Sam");
  const [number, setNumber] = useState(1);
  
  const formatNumber = parseInt(number);

  // const getItems = () => [formatNumber, formatNumber + 1, formatNumber + 2, formatNumber + 3];

  const getItems = useCallback(() => {
    return [formatNumber, formatNumber + 1, formatNumber + 2, formatNumber + 3];
  }, [number]);

  return (
    <>
      <Header data={info['useCallback']}/>
      <div className='content'>
        
        <label htmlFor="form">List 4 numbers starting from: </label>
        <input type="text" name="form" id="form" value={number} onChange={(e) => setNumber(e.target.value)} />

        <hr />

        <List getItems={getItems} />

        <hr />

        <input type="text" name="form2" id="form2" value={name} onChange={(e) => setName(e.target.value)} />
        <div>{ `My name is ${name}` }</div>

      </div>
      <Footer data={info['useCallback']}/>
    </>
  );
}

export default UseCallback;
