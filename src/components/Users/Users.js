import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import StoresContext from '../../contexts/StoresContext';
import UserCard from '../UserCard';
import s from './Users.module.scss';

const Users = observer(() => {
  const { userstore } = useContext(StoresContext);

  return (
    <div className={s.container}>
      {userstore.users.map(item => (
        <UserCard key={item.id} {...item} />
      ))}
    </div>
  );
});

export default Users;
