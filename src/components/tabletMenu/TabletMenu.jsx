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
import s from './TabletMenu.module.css';
import '../../App.module.css';
import UserMenu from '../userMenu/UserMenu';
export default function TabletMenu({ isAuth, dispatch }) {
  return (
    <>
      <nav className={s.sidebarMenu}>
        <ul>
          <li className={s['home-icon']}>
            <div>
              <Link to={'/'} className={s.homePageLink}>
                <MdHome className={s.headerIcon} />
              </Link>
            </div>
          </li>
          {isAuth === true && (
            <>
              <li className={s['contacts-icon']}>
                <div>
                  <Link to={'/contacts'} className={s.homePageLink}>
                    <MdContacts className={s.headerIcon} />
                  </Link>
                </div>
              </li>
            </>
          )}
          <ul className={s.authList}>
            {isAuth === true ? (
              <li className={s['logout-icon']}>
                <div>
                  <button
                    type="button"
                    className={(s.authLinks, s.OutLink)}
                    onClick={() => {
                      dispatch(logOut());
                    }}
                  >
                    <MdLogout className={s.headerIcon} />
                  </button>
                </div>
              </li>
            ) : (
              <>
                <li className={s['login-icon']}>
                  <div>
                    <Link to={'/auth/login'} className={s.authLinks}>
                      <MdLogin className={s.headerIcon} />
                    </Link>
                  </div>
                </li>
                <li className={s['register-icon']}>
                  <div>
                    <Link className={s.authLinks} to={'/auth/register'}>
                      <MdHowToReg className={s.headerIcon} />
                    </Link>
                  </div>
                </li>
              </>
            )}
          </ul>
        </ul>
      </nav>
    </>
  );
}
