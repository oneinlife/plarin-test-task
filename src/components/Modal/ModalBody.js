import React, { useContext } from 'react';
import classNames from 'classnames';
import ModalContext from './ModalContext';
import s from './ModalBody.module.scss';

const modalVariants = {
  primary: s.primary,
};

const ModalBody = ({ className, children, ...restProps }) => {
  const context = useContext(ModalContext);

  return (
    <div {...restProps} className={classNames(s.root, className, modalVariants[context.variant])}>
      {children}
    </div>
  );
};

ModalBody.displayName = 'ModalBody';

export default ModalBody;
