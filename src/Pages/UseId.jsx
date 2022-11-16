import { useId } from 'react';
import info from './info.json';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

const UseId = () => {
    const id_1 = useId();
    const id_2 = useId();
    const id_3 = useId();

    return (
      <>
        <Header data={info['useId']}/>
        <div className='content'>
        
          <div>
            <div style={{marginBottom: 10}}>{`Id #1 being used on form below = "${id_1}"`}</div>
            <label htmlFor={id_1}>Do you like React?</label>
            <input id={id_1} type="checkbox" name="react"/>
          </div>

          <hr />

          <div>
            <div style={{marginBottom: 10}}>{`Id #2 being used on form below = "${id_2}"`}</div>
            <label htmlFor={id_2}>Do you like Apples?</label>
            <input id={id_2} type="checkbox" name="react"/>          
          </div>

          <hr />

          <div>
            <div style={{marginBottom: 10}}>{`Id #3 being used on form below = "${id_3}"`}</div>
            <label htmlFor={id_3}>Do you like Cats?</label>
            <input id={id_3} type="checkbox" name="react"/>  
          </div>

        </div>
        <Footer data={info['useId']}/>
      </>
    );
}

export default UseId;
