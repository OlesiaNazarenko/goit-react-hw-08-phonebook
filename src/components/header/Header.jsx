import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import s from '../header/Header.module.css';
import { logOut } from '../../redux/authorization/auth-operations';
import { getIsAuth } from '../../redux/authorization/auth-selectors';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import UserMenu from 'components/userMenu/UserMenu';
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
  // let contacts = useSelector(store);
  // console.log(contacts);
  return (
    <div className={s.navWrap}>
      <nav className={s.nav}>
        <ul>
          <li>
            {' '}
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
                    // console.log(contacts);
                    // contacts = [];
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
