import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import StoresContext from '../../contexts/StoresContext';
import ModalUser from '../ModalUser';
import s from './AddUser.module.scss';

const AddUser = observer(() => {
  const { userstore } = useContext(StoresContext);
  const [isShow, setShow] = useState(false);
  const onHide = () => setShow(false);
  const onShow = () => setShow(true);
  const onSave = user => {
    userstore.addUser(user);
    onHide();
  };

  return (
    <>
      <div className={s.container} onClick={onShow}>
        <div className={s.container__wrapper}>
          <div className={s.container__content}>
            <span className={s.name}>+</span>
          </div>
        </div>
      </div>
      {isShow && (
      <ModalUser
        onHide={onHide}
        onSave={onSave}
      />
      )}
    </>
  );
});

export default AddUser;
