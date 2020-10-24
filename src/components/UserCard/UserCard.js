import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import StoresContext from '../../contexts/StoresContext';
import ModalUser from '../ModalUser';
import s from './UserCard.module.scss';

const UserCard = observer(({ id, first_name: firstName, last_name: lastName, email, avatar }) => {
  const { userstore } = useContext(StoresContext);
  const [isShow, setShow] = useState(false);
  const onHide = () => setShow(false);
  const onShow = () => setShow(true);
  const onSave = user => {
    userstore.updateUser(user);
    onHide();
  };

  const onDelete = user => {
    userstore.deleteUser(user);
    onHide();
  };

  return (
    <>
      <div className={s.container} onClick={onShow}>
        <div className={s.container__wrapper}>
          <div className={s.container__content} style={{ backgroundImage: `url(${avatar}), url('static/no_photo.png')` }}>
            <span className={s.name}>{firstName}</span>
          </div>
        </div>
      </div>
      <ModalUser
        isShow={isShow}
        onHide={onHide}
        onSave={onSave}
        onDelete={onDelete}
        firstName={firstName}
        lastName={lastName}
        email={email}
        id={id}
      />
    </>
  );
});

export default UserCard;
