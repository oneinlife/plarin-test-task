import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import ModalPortal from './ModalPortal';
import ModalContext from './ModalContext';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';

const Modal = ({
  variant = 'temp', onHide = () => {}, children, overlayClassName, modalClassName,
}) => {
  const modalContext = useMemo(() => ({ onHide, variant }), [onHide, variant]);

  return (
    <ModalContext.Provider value={modalContext}>
      {ReactDOM.createPortal(
        <ModalPortal
          overlayClassName={overlayClassName}
          modalClassName={modalClassName}
        >
          {children}
        </ModalPortal>,
        document.body,
      )}
    </ModalContext.Provider>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;

export default Modal;
