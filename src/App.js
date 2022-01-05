import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import s from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header/Header';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import PublicRoute from './components/publicRoute/PublicRoute';
import Spinner from './components/spinner/Spinner';
import { fetchCurrentUser } from './redux/authorization/auth-operations';
import { getIsCurrentUser } from './redux/authorization/auth-selectors';
const HomeView = lazy(() => import('components/homePage/HomePage.jsx'));
const ContactsView = lazy(() =>
  import('components/phonebookHome/PhonebookHome.jsx'),
);
const AuthView = lazy(() => import('components/authPage/AuthPage.jsx'));

function App() {
  const dispatch = useDispatch();
  const isCurrentUser = useSelector(getIsCurrentUser);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isCurrentUser ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <HomeView />
                  </PublicRoute>
                }
              />

              <Route
                path="/auth/:authType"
                element={
                  <PublicRoute restricted redirectTo="/contacts">
                    <AuthView />
                  </PublicRoute>
                }
              />
              <Route
                path="/auth/:authType"
                element={
                  <PublicRoute restricted>
                    <AuthView />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/auth/login">
                    <ContactsView />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}
export default App;
