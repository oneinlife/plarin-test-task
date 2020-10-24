import React from 'react';
import Users from './components/Users';
import Pagination from './components/Pagination';
import Row from './components/Row';
import StoresContext from './contexts/StoresContext';
import Store from './stores';
import s from './App.module.scss';

function App() {
  return (
    <StoresContext.Provider value={Store}>
      <div className={s.App}>
        <Row>
          <Users />
          <Pagination />
        </Row>
      </div>
    </StoresContext.Provider>
  );
}

export default App;
