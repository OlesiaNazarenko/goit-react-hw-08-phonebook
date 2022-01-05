import React from 'react';
import Loader from 'react-loader-spinner';
import s from './Spinner.module.css';

export default function Spinner() {
  return (
    <div className={s.loader}>
      <Loader
        type="ThreeDots"
        color="#000000"
        height={50}
        width={50}
        timeout={3000}
      />
    </div>
  );
}
