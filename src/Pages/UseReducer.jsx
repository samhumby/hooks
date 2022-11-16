import '../App.css';
import Header from './Header';
import info from './info.json';
import Footer from './Footer';
import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
};

const UseReducer = () => {

  // Arg 1: a function to be performed on the state to produce a new state
  // Ard 2: Initial value
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  // The dispatch function is what we use to update the state and it calls the reducer
  const increment = () => { dispatch({ type: 'increment' }) }
  const decrement = () => { dispatch({ type: 'decrement' }) }

  return (
    <>
      <Header data={info['useReducer']}/>
      <div className='content'>

        <button onClick={decrement}> - </button>
        <div> { state.count } </div>
        <button onClick={increment}> + </button>

      </div>
      <Footer data={info['useReducer']}/>
    </>
  );
}

export default UseReducer;
