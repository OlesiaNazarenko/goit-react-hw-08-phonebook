import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut } from './auth-operations';
const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null, password: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});
export default authSlice.reducer;

// urururu;
// ('urururu@fjfj.com');
// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWQxYzNhOThlODY3NjAwMTUzZGMwYjgiLCJpYXQiOjE2NDExMzcwNjV9.jwU6zkC6P7fAX4cqe_RbCS8RwRV6LKTg-wruUFKpVUE';

// "mjkfkggjjggj"
//"mjkfkggjjggj@fjfj.com"
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWQxYzcyNzhlODY3NjAwMTUzZGMwYzYiLCJpYXQiOjE2NDExMzc5NTl9.7-3aVdyrupp1xfPp0YeW-vIPKjC1x4B1rZSP5lqJ1tk"

// "iwiiwiwuuu"
//"iwiiwiwuuu@kkfk.com"
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWQxYzdiNjhlODY3NjAwMTUzZGMwYzkiLCJpYXQiOjE2NDExMzgxMDJ9.QKXwsUrh-oWmhd8-8Ssj15m6JwkpZdFzWBgPelEuggU"
