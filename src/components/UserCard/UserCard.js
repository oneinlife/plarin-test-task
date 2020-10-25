import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import ModalUser from '../ModalUser';
import s from './UserCard.module.scss';

const UserCard = observer(({ user }) => {
  const [isShow, setShow] = useState(false);
  const onHide = () => setShow(false);
  const onShow = () => {
    user.loadFull(() => setShow(true));
  };
  const onSave = () => {
    user.updateUser(user);
    onHide();
  };

  const onDelete = () => {
    user.deleteUser(user);
    onHide();
  };
  return (
    <>
      <div className={s.container} onClick={onShow}>
        <div className={s.container__wrapper}>
          <div className={s.container__content} style={{ backgroundImage: `url(${user.avatar}), url(${process.env.PUBLIC_URL}/no_photo.png)` }}>
            <span className={s.name}>{user.firstName}</span>
          </div>
        </div>
      </div>
      {isShow && (
      <ModalUser
        isShow={isShow}
        isLoading={user.isLoading}
        onHide={onHide}
        onSave={onSave}
        onDelete={onDelete}
        user={user}
      />
      )}
    </>
  );
});

export default UserCard;
