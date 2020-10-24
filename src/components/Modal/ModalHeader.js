import React, { useContext } from 'react';
import classNames from 'classnames';
import ModalContext from './ModalContext';
import s from './ModalHeader.module.scss';

const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" size="1em">
    <path d="M18.3 5.71C17.91 5.32 17.28 5.32 16.89 5.71L12 10.59L7.11 5.7C6.72 5.31 6.09 5.31 5.7 5.7C5.31 6.09 5.31 6.72 5.7 7.11L10.59 12L5.7 16.89C5.31 17.28 5.31 17.91 5.7 18.3C6.09 18.69 6.72 18.69 7.11 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71Z" />
  </svg>
);

const modalVariants = {
  primary: s.primary,
  temp: s.temp,
};

const ModalHeader = ({
  closeButton = true, closeButtonClassName, className, children, ...props
}) => {
  const context = useContext(ModalContext);

  return (
    <div
      {...props}
      className={classNames(s.root, className, modalVariants[context.variant])}
    >
      {children}
      {closeButton && (
        <button
          onClick={context.onHide}
          type="button"
          className={classNames(s.closeButton, closeButtonClassName)}
        >
          <IconClose />
        </button>
      )}
    </div>
  );
};

ModalHeader.displayName = 'ModalHeader';

export default ModalHeader;
