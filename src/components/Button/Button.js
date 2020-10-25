import React from 'react';
import classNames from 'classnames';
import s from './Button.module.scss';

const Button = ({ className, active, children, ...props }) => (
  <div
    className={classNames(
      className,
      s.button,
      { [s.active]: active },
    )}
    {...props}
  >
    {children}
  </div>
);

export default Button;
