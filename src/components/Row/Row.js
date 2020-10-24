import React from 'react';
import s from './Row.module.scss';

const Row = ({ children, ...props }) => (
  <div className={s.row} {...props}>
    {children}
  </div>
);

export default Row;
