import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { logOutAction } from '../contacts/contacts-actions';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
    thunkAPI.dispatch(logOutAction());
  } catch (error) {
    toast.error(error.message, { autoClose: 2000 });
    return thunkAPI.rejectWithValue(error);
  }
});
export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
      return thunkAPI.rejectWithValue(error);
    }
  },
);

// uuuuuuuuuuu;
