import { useSyncExternalStore } from 'react';
import '../App.css';
import Header from './Header';
import info from './info.json';
import Footer from './Footer';
import store from '../utils/store';

const useStore = (selector = (state) => state) => useSyncExternalStore(store.subscribe, () => selector(store.getState()));


const UseSyncExternalStore = () => {
  const value1 = useStore((state) => state['value1']);
  const value2 = useStore((state) => state['value2']);

  const state = useStore();
  const alterValue = (value, amount) => {
    store.setState({
      ...state,
      [value]: state[value] + amount
    })
  };

  return (
    <>
      <Header data={info['useSyncExternalStore']}/>
      <div className='content'>

        <div>{ `Value #1 is set to: ${value1}` }</div>
        <button onClick={() => alterValue('value1', 1)} > + </button>
        <button onClick={() => alterValue('value1', -1)} > - </button>

        <hr />

        <div>{ `Value #2 is set to: ${value2}` }</div>
        <button onClick={() => alterValue('value2', 1)} > + </button>
        <button onClick={() => alterValue('value2', -1)} > - </button>

      </div>
      <Footer data={info['useSyncExternalStore']}/>
    </>
  );
}

export default UseSyncExternalStore;
