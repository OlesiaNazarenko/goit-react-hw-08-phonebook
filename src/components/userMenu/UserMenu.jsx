import s from '../userMenu/UserMenu.module.css';
import { useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/authorization/auth-selectors';
import { MdFace } from 'react-icons/md';
export default function UserMenu() {
  const userEmail = useSelector(getUserEmail);
  return (
    userEmail && (
      <span className={s.userEmail}>
        <MdFace className={s.userIcon} />
        {`${userEmail}`}
      </span>
    )
  );
}
