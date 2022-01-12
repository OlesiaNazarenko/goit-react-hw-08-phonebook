import React from 'react';
import Loader from 'react-loader-spinner';
import s from './Spinner.module.css';

export default function Spinner() {
  return (
    <div className={s.loaderWrap}>
      <Loader
        type="ThreeDots"
        color="#2f2e33"
        height={50}
        width={50}
        timeout={3000}
        className={s.loader}
      />
    </div>
  );
}
