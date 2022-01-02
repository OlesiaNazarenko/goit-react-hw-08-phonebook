import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import s from '../header/Header.module.css';
import store from '../../redux/store';
import { logOut } from '../../redux/authorization/auth-operations';
import {
  getUserName,
  getIsAuth,
} from '../../redux/authorization/auth-selectors';
function Header() {
  const dispatch = useDispatch();
  const state = store.getState();
  const userName = useSelector(getUserName);
  const isAuth = useSelector(getIsAuth);
  console.log(state.auth.isLoggedIn);
  return (
    <nav className={s.nav}>
      <Link to={'/home'} className={s.homePageLink}>
        Home
      </Link>
      {isAuth === true && (
        <span className={s.userName}>Welcome, {userName}</span>
      )}
      <ul className={s.authList}>
        {isAuth === true ? (
          <li>
            <button
              type="button"
              className={(s.authLinks, s.OutLink)}
              onClick={() => {
                dispatch(logOut());
              }}
            >
              Log Out
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link className={s.authLinks} to={'/auth/register'}>
                Sign up
              </Link>
            </li>
            <li>
              <Link to={'/auth/login'} className={s.authLinks}>
                Log in
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
export default Header;
