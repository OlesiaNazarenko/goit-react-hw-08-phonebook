import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import s from '../header/Header.module.css';
import { logOut } from '../../redux/authorization/auth-operations';
import { getIsAuth } from '../../redux/authorization/auth-selectors';
import UserMenu from 'components/userMenu/UserMenu';
function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  return (
    <>
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
            </>
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
    </>
  );
}
export default Header;
