import './App.css';
import Sidebar from './Components/Sidebar';
import AppRoutes from './AppRoutes';
import React, { useState } from 'react';

// Provider
export const ThemeContext = React.createContext();

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={darkTheme}>
      <div className="App">
        <Sidebar setDarkTheme={setDarkTheme} />
        <div className='pageWrapper'>
          <AppRoutes/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
