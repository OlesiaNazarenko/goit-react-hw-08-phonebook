import { logOut } from '../../redux/authorization/auth-operations';
import {
  MdHome,
  MdContacts,
  MdLogout,
  MdLogin,
  MdHowToReg,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import s from './MobileMenu.module.css';
import { motion } from 'framer-motion';
export default function MobileNav({ mbOnClose, isMobile, dispatch, isAuth }) {
  return (
    <ul className={s.mbList}>
      <motion.li
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: '-100%' }}
        onClick={() => {
          isMobile && mbOnClose();
        }}
      >
        <Link to={'/'} className={s.homePageLink}>
          <MdHome className={s.headerIcon} />
          Home
        </Link>
      </motion.li>
      {isAuth === true ? (
        <>
          <motion.li
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: '-100%' }}
            onClick={() => {
              isMobile && mbOnClose();
            }}
          >
            <Link to={'/contacts'} className={s.homePageLink}>
              <MdContacts className={s.headerIcon} />
              Contacts
            </Link>
          </motion.li>
          <motion.li
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: '-100%' }}
            className={s.authItem}
            onClick={() => {
              isMobile && mbOnClose();
            }}
          >
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
          </motion.li>
        </>
      ) : (
        <>
          <motion.li
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: '-100%' }}
            className={s.authItem}
            onClick={() => {
              isMobile && mbOnClose();
            }}
          >
            <Link className={s.authLinks} to={'/auth/register'}>
              <MdHowToReg className={s.headerIcon} />
              Sign up
            </Link>
          </motion.li>
          <motion.li
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: '-100%' }}
            className={s.authItem}
            onClick={() => {
              isMobile && mbOnClose();
            }}
          >
            <Link to={'/auth/login'} className={s.authLinks}>
              <MdLogin className={s.headerIcon} />
              Log in
            </Link>
          </motion.li>
        </>
      )}
    </ul>
  );
}
