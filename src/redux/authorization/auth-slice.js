import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, fetchCurrentUser } from './auth-operations';
const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.error = null;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.error.message;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [login.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.error.message;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null, password: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.rejected](state) {
      state.isLoggedIn = false;
      state.isFetchingCurrentUser = false;
    },
  },
});
export default authSlice.reducer;

// urururu;
// ('urururu@fjfj.com');

// "mjkfkggjjggj"
//"mjkfkggjjggj@fjfj.com"

// "iwiiwiwuuu"
//"iwiiwiwuuu@kkfk.com"
