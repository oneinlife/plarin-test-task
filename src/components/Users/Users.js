import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite'
import StoresContext from '../../contexts/StoresContext';

const Users = observer(() => {
  const stores = useContext(StoresContext)

  return stores.userstore.users.map(item => (
    <span>{JSON.stringify(item)}</span>
  ))
});

export default Users;
