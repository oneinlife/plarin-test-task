import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ModalPortal from './ModalPortal';
import ModalContext from './ModalContext';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';

const Modal = ({
  show, variant = 'temp', onHide = () => {}, children, overlayClassName, modalClassName,
}) => {
  const modalContext = useMemo(() => ({ onHide, variant }), [onHide, variant]);

  return (
    <ModalContext.Provider value={modalContext}>
      {show && ReactDOM.createPortal(
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

Modal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  children: PropTypes.node.isRequired,
  overlayClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  variant: PropTypes.oneOf(['temp', 'primary']),
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;

export default Modal;
