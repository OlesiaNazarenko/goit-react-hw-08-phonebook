import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import s from '../authPage/AuthPage.module.css';
import { register, login } from '../../redux/authorization/auth-operations';
import { getIsAuth } from '../../redux/authorization/auth-selectors';
function AuthPage() {
  const { authType } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(getIsAuth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const redirect = () => {
    isAuth === true && navigate('/contacts');
    // authType === false && navigate('/auth/login');
  };
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    authType === 'login' && dispatch(login({ email, password }));
    authType === 'register' && dispatch(register({ name, email, password }));
    console.log(isAuth);

    setEmail('');
    setPassword('');
    setName('');
  };
  return (
    <div className={s.formWrap}>
      <h1>Please, enter your email and password in the form:</h1>
      <form className={s.authForm} onSubmit={handleSubmit}>
        {authType === 'register' && (
          <label className={s.label} htmlFor="name">
            Enter your name
            <input
              className={s.authInput}
              type="text"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </label>
        )}
        <label className={s.label} htmlFor="email">
          Enter your email
          <input
            className={s.authInput}
            type="text"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </label>
        <label className={s.label} htmlFor="password">
          Enter your password
          <input
            className={s.authInput}
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </label>
        <button className={s.authBtn} onClick={redirect()} type="submit">
          {authType === 'login' ? 'Log In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}
export default AuthPage;
