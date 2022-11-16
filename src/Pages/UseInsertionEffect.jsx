import '../App.css';
import Header from './Header';
import info from './info.json';
import Footer from './Footer';
import { useRef, useInsertionEffect } from 'react';


const UseInsertionEffect = () => {
  const divRef = useRef();

  useInsertionEffect(() => {
    console.log(divRef);
  }, []);

  return (
    <>
      <Header data={info['useInsertionEffect']}/>
      <div className='content'>

        <div ref={divRef}>
          <img src="https://i.imgur.com/G7qHwQt.png" style={{width: 500}}/>
        </div>
      
      </div>
      <Footer data={info['useInsertionEffect']}/>
    </>
  );
}

export default UseInsertionEffect;
