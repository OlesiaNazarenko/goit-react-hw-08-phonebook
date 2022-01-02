import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import s from './App.module.css';
// import { useDispatch, useSelector } from 'react-redux';
import PhonebookHome from './components/phonebookHome/PhonebookHome';
import Header from './components/header/Header';
import AuthPage from './components/authPage/AuthPage';
import HomePage from 'components/homePage/HomePage';
function App() {
  // const dispatch = useDispatch();
  const [isAuth] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    isAuth ? navigate('/') : navigate('/auth/login');
  }, [isAuth]);

  return (
    <>
      <Header />
      {isAuth ? (
        <Suspense fallback={<h1>Downloading...</h1>}>
          <Routes>
            <Route path="/contacts" element={<PhonebookHome />} />
          </Routes>
        </Suspense>
      ) : (
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/auth/:authType" element={<AuthPage />} />
        </Routes>
      )}
    </>
  );
}
export default App;
