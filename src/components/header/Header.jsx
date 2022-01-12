import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../App.module.css';
import s from '../header/Header.module.css';
import { logOut } from '../../redux/authorization/auth-operations';
import { getIsAuth } from '../../redux/authorization/auth-selectors';
import MobileMenu from '../mobileMenu/MobileMenu';
import TabletMenu from '../tabletMenu/TabletMenu';
import PCMenu from '../PCMenu/PCMenu';
function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  return (
    <div className={s.navWrap}>
      <MobileMenu isAuth={isAuth} dispatch={dispatch} />
      <TabletMenu isAuth={isAuth} dispatch={dispatch} />
      <PCMenu isAuth={isAuth} dispatch={dispatch} />
    </div>
  );
}
export default Header;
