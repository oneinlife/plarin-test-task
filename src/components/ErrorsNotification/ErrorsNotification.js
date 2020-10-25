import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import StoresContext from '../../contexts/StoresContext';
import s from './ErrorsNotification.module.scss';

const ErrorsNotification = observer(() => {
  const { errorsStore } = useContext(StoresContext);
  return (
    <div className={s.container}>
      {errorsStore.errors.map((error, i) => (
        <div className={s.error} key={i}>
          {error.message || 'Неизвестная ошибка'}
        </div>
      ))}
    </div>
  );
});

export default ErrorsNotification;
