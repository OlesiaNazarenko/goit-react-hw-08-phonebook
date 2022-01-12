import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import s from './MobileMenu.module.css';
import MobileNav from './MobileNav.jsx';
import { RiCloseCircleLine } from 'react-icons/ri';

export default function MobileMenu({ isAuth, dispatch }) {
  const [mbOpen, setMbOpen] = useState(false);
  const humburgerIcon = (
    <GoThreeBars
      className={s.HumburgerIcon}
      onClick={() => {
        setMbOpen(!mbOpen);
      }}
    />
  );
  const closeIcon = (
    <RiCloseCircleLine
      className={s.closeIcon}
      onClick={() => {
        setMbOpen(!mbOpen);
      }}
    />
  );
  const mbOnClose = () => {
    setMbOpen(false);
  };
  return (
    <nav className={s.mbMenu}>
      {mbOpen ? closeIcon : humburgerIcon}
      {mbOpen && (
        <MobileNav
          mbOnClose={mbOnClose}
          isAuth={isAuth}
          dispatch={dispatch}
          isMobile={true}
        />
      )}
    </nav>
  );
}
