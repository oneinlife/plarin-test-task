import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Modal from '../Modal';
import Button from '../Button';
import s from './ModalUser.module.scss';

const ModalUser = observer(({ user = {}, onHide, isShow, onSave, onDelete }) => {
  const [firstName, setFirstName] = useState(user.firstName || '');
  const [lastName, setLastName] = useState(user.lastName || '');
  const [email, setEmail] = useState(user.email || '');
  const onChangeFirstName = e => setFirstName(e.target.value);
  const onChangeLastName = e => setLastName(e.target.value);
  const onChangeEmail = e => setEmail(e.target.value);
  const onDeleteCurrent = () => onDelete(user.id);
  const onSaveCurrent = () => onSave({ id: user.id, firstName, lastName, email });

  return (
    <Modal
      show={isShow}
      onHide={onHide}
      variant="primary"
      modalClassName={s.modal}
    >
      <Modal.Header />
      <Modal.Body className={s.modalBody}>
        <div className={s.container}>
          <div className={s.container__wrapper}>
            <div
              className={s.container__content}
              style={{ backgroundImage: `url(${user.avatar || `${process.env.PUBLIC_URL}/no_photo.png`}), url(${process.env.PUBLIC_URL}/no_photo.png)` }}
            />
          </div>
        </div>
        <input
          onChange={onChangeFirstName}
          type="text"
          value={firstName}
          placeholder="first_name"
          className={s.input}
        />
        <input
          onChange={onChangeLastName}
          type="text"
          value={lastName}
          placeholder="last_name"
          className={s.input}
        />
        <input
          onChange={onChangeEmail}
          type="email"
          value={email}
          placeholder="email"
          className={s.input}
        />
        <div className={s.buttonContaner}>
          {onDelete && (
          <Button onClick={onDeleteCurrent}>
            Удалить
          </Button>
          )}
          {onSave && (
          <Button className={s.button} onClick={onSaveCurrent}>
            Сохранить
          </Button>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
});

export default ModalUser;
