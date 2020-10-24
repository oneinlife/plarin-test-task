import React, { useState } from 'react';
import Modal from '../Modal';
import s from './ModalUser.module.scss';

const ModalUser = ({ id, onHide, isShow, onSave, onDelete, ...props }) => {
  const [firstName, setFirstName] = useState(props.firstName || '');
  const [lastName, setLastName] = useState(props.lastName || '');
  const [email, setEmail] = useState(props.email || '');
  const onChangeFirstName = e => setFirstName(e.target.value);
  const onChangeLastName = e => setLastName(e.target.value);
  const onChangeEmail = e => setEmail(e.target.value);
  const onDeleteCurrent = () => onDelete(id);
  const onSaveCurrent = () => onSave({ id, firstName, lastName, email });

  return (
    <Modal
      show={isShow}
      onHide={onHide}
      variant="primary"
      modalClassName={s.modal}
    >
      <Modal.Header />
      <Modal.Body>
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
        <div>
          {onDelete && (
            <button onClick={onDeleteCurrent}>
              Удалить
            </button>
          )}
          {onSave && (
            <button onClick={onSaveCurrent}>
              Сохранить
            </button>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalUser;
