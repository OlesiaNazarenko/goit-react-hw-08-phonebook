import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import s from '../header/Header.module.css';
import { logOut } from '../../redux/authorization/auth-operations';
import { getIsAuth } from '../../redux/authorization/auth-selectors';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import UserMenu from 'components/userMenu/UserMenu';
function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  // let contacts = useSelector(store);
  // console.log(contacts);
  return (
    <div className={s.navWrap}>
      <nav className={s.nav}>
        <Link to={'/'} className={s.homePageLink}>
          Home
        </Link>
        {isAuth === true && (
          <Link to={'/contacts'} className={s.homePageLink}>
            Contacts
          </Link>
        )}
        <ul className={s.authList}>
          {isAuth === true ? (
            <>
              <li>
                <UserMenu />
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
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li className={s.authItem}>
                <Link className={s.authLinks} to={'/auth/register'}>
                  Sign up
                </Link>
              </li>
              <li className={s.authItem}>
                <Link to={'/auth/login'} className={s.authLinks}>
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
