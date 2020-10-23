import React, {createContext} from 'react';
import Users from './components/Users';
import StoresContext from './contexts/StoresContext';
import Store from './stores';

function App() {
  return (
    <StoresContext.Provider value={Store}>
      <div className="App">
        <Users />
      </div>
    </StoresContext.Provider>
  );
}

export default App;