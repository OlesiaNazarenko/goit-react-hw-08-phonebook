import React from 'react';
import { Link } from 'react-router-dom';
import { logOut } from '../../redux/authorization/auth-operations';
import {
  MdHome,
  MdContacts,
  MdLogout,
  MdLogin,
  MdHowToReg,
} from 'react-icons/md';
import s from './PCMenu.module.css';
import '../../App.module.css';
export default function PCMenu({ isAuth, dispatch }) {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <Link to={'/'} className={s.homePageLink}>
            <MdHome className={s.headerIcon} />
            Home
          </Link>
        </li>
        {isAuth === true && (
          <li>
            <Link to={'/contacts'} className={s.homePageLink}>
              <MdContacts className={s.headerIcon} />
              Contacts
            </Link>
          </li>
        )}
      </ul>

      <ul className={s.authList}>
        {isAuth === true ? (
          <>
            <li className={s.authItem}>
              <button
                type="button"
                className={(s.authLinks, s.OutLink)}
                onClick={() => {
                  dispatch(logOut());
                }}
              >
                <MdLogout className={s.headerIcon} />
                Log Out
              </button>
            </li>
          </>
        ) : (
          <>
            <li className={s.authItem}>
              <Link className={s.authLinks} to={'/auth/register'}>
                <MdHowToReg className={s.headerIcon} />
                Sign up
              </Link>
            </li>
            <li className={s.authItem}>
              <Link to={'/auth/login'} className={s.authLinks}>
                <MdLogin className={s.headerIcon} />
                Log in
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
