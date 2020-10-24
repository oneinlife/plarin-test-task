import React from 'react';
import s from './UserCard.module.scss';

const UserCard = ({ first_name: firstName, avatar }) => (
  <div className={s.container}>
    <div className={s.container__wrapper}>
      <div className={s.container__content} style={{ backgroundImage: `url(${avatar}), url('static/no_photo.png')` }}>
        <span className={s.name}>{firstName}</span>
      </div>
    </div>
  </div>
);

export default UserCard;
