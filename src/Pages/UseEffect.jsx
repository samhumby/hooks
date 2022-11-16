import '../App.css';
import Header from './Header';
import info from './info.json';
import Footer from './Footer';
import { useEffect, useState } from 'react';


const UseEffect = () => {
  const [name, setName] = useState("Sam");
  const [age, setAge] = useState(27);

  useEffect(() => {
    alert("I will run ONLY when the component is first created");
  }, []);

  // useEffect(() => {
  //   alert("I will run when name changes");
  // }, [name]);

  
  // useEffect(() => {
  //   alert("I will run whenever the page renders");
  // });

  // useEffect(() => {
  //   return(() => alert("I will run when the component unmounts"));
  // }, []);

  return (
    <>
      <Header data={info['useEffect']}/>
      <div className='content'>
        <div>{`My name is ${name}`}</div>
        <input type="text" name="form" id="form" value={name} onChange={(e) => setName(e.target.value)} />

        <hr/>

        <div>{`I am ${age} years old`}</div>
        <input type="text" name="form" id="form" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <Footer data={info['useEffect']}/>
    </>
  );
}

export default UseEffect;
