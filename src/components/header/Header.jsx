import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../App.module.css';
import s from '../header/Header.module.css';
import { logOut } from '../../redux/authorization/auth-operations';
import { getIsAuth } from '../../redux/authorization/auth-selectors';
import UserMenu from 'components/userMenu/UserMenu';
import { GoThreeBars } from 'react-icons/go';
import {
  MdHome,
  MdContacts,
  MdLogout,
  MdLogin,
  MdHowToReg,
} from 'react-icons/md';
function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  return (
    <div className={s.navWrap}>
      <nav className={s.sidebarMenu}>
        <ul>
          <li className={s['home-icon']}>
            <div>
              <Link to={'/'}>
                <MdHome className={s.headerIcon} />
              </Link>
            </div>
          </li>
          {isAuth === true && (
            <li className={s['contacts-icon']}>
              <div>
                <Link to={'/contacts'}>
                  <MdContacts className={s.headerIcon} />
                </Link>
              </div>
            </li>
          )}

          <li className={s['login-icon']}>
            <div>
              <MdLogin className={s.headerIcon} />
            </div>
          </li>
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
          <li className={s['register-icon']}>
            <div>
              <MdHowToReg className={s.headerIcon} />
            </div>
          </li>
        </ul>
      </nav>
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
              <li>
                <UserMenu className={s.headerIcon} />
              </li>
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
    </div>
  );
}
export default Header;
