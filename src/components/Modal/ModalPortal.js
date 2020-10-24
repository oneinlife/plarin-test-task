import React, { useRef, useEffect, useContext } from 'react';
import classNames from 'classnames';
import ModalContext from './ModalContext';
import s from './ModalPortal.module.scss';

const modalVariants = {
  primary: s.primary,
};

const ModalPortal = ({ children, overlayClassName, modalClassName }) => {
  const overlayRef = useRef(null);
  const context = useContext(ModalContext);

  useEffect(() => {
    const handleClickOutside = ({ target }) => {
      overlayRef.current === target && context.onHide();
    };
    const keyboardClose = ({ key }) => key === 'Escape' && context.onHide();

    document.body.style.overflow = 'hidden';
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', keyboardClose, false);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', keyboardClose, false);
    };
  }, [context]);

  return (
    <div
      ref={overlayRef}
      className={classNames(s.overlay, overlayClassName, modalVariants[context.variant])}
      tabIndex="-1"
      role="dialog"
    >
      <div
        className={classNames(s.modal, modalClassName)}
        role="document"
      >
        {children}
      </div>
    </div>
  );
};

export default ModalPortal;
