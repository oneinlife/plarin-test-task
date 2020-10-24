import React, { useContext } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import StoresContext from '../../contexts/StoresContext';
import s from './Pagination.module.scss';

const Pagination = observer(() => {
  const { userstore } = useContext(StoresContext);
  const pages = [...Array(userstore.totalPages || 0)];
  const onClick = page => userstore.changePage(page);

  return (
    <div className={s.container}>
      {pages.map((i, index) => (
        <div
          className={classNames(
            s.button,
            { [s.active]: userstore.currentPage === index + 1 },
          )}
          key={index}
          onClick={() => onClick(index + 1)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
});

export default Pagination;
