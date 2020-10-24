import React, { useState } from 'react';
import Modal from '../Modal';
import s from './AddUser.module.scss';

const AddUser = () => {
  const [show, setShow] = useState(false);
  const onHide = () => setShow(false);
  const onShow = () => setShow(true);

  return (
    <>
      <div className={s.container} onClick={onShow}>
        <div className={s.container__wrapper}>
          <div className={s.container__content}>
            <span className={s.name}>+</span>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={onHide}
        variant="primary"
      >
        <Modal.Header />
        <Modal.Body />
      </Modal>
    </>
  );
};

export default AddUser;
