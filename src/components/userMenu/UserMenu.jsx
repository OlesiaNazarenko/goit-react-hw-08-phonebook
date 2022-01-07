import s from '../userMenu/UserMenu.module.css';
import { useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/authorization/auth-selectors';
export default function UserMenu() {
  const userEmail = useSelector(getUserEmail);
  return userEmail && <span className={s.userEmail}>{`${userEmail}`}</span>;
}
