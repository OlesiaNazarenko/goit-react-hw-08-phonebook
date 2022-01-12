import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import s from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header/Header';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import PublicRoute from './components/publicRoute/PublicRoute';
import Spinner from './components/spinner/Spinner';
import { fetchCurrentUser } from './redux/authorization/auth-operations';
import {
  getIsCurrentUser,
  authToken,
  getIsAuth,
} from './redux/authorization/auth-selectors';
import UserMenu from 'components/userMenu/UserMenu';
const HomePage = lazy(() => import('components/homePage/HomePage.jsx'));
const PhonebookHome = lazy(() =>
  import('components/phonebookHome/PhonebookHome.jsx'),
);
const AuthPage = lazy(() => import('components/authPage/AuthPage.jsx'));
function App() {
  const dispatch = useDispatch();
  const isCurrentUser = useSelector(getIsCurrentUser);
  useEffect(() => {
    if (authToken !== null) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch]);
  const isAuth = useSelector(getIsAuth);
  return (
    <>
      {isCurrentUser ? (
        <Spinner />
      ) : (
        <div className={s.mainDiv}>
          {isAuth === true && <UserMenu />}
          <Header />
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />

              <Route
                path="/auth/:authType"
                element={
                  <PublicRoute restricted redirectTo="/contacts">
                    <AuthPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/auth/:authType"
                element={
                  <PublicRoute restricted>
                    <AuthPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/auth/login">
                    <PhonebookHome />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </div>
      )}
    </>
  );
}
export default App;
