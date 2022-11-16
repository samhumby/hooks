import { useContext, useState } from 'react';
import '../App.css';
import Header from './Header';
import info from './info.json';
import Footer from './Footer';
import PropDrilling from '../Example/PropDrilling';
import { ThemeContext } from '../App';


const UseContext = () => {
  const darkTheme = useContext(ThemeContext);

  return (
    <>
      <Header data={info['useContext']}/>
      <div className='content'>

        <PropDrilling theme={darkTheme ? "propDrillingDark" : "propDrilling"} />

      </div>
      <Footer data={info['useContext']}/>
    </>
  );
}

export default UseContext;
