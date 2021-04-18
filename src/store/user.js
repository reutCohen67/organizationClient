import { createSlice } from '@reduxjs/toolkit';
import http from '../api/httpService';
import api from '../api/constants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Create slice name user and initialize its state.
const slice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    users: [],
    loading: true,
    error: '',
    errors: false,
  },
  reducers: {
    getUserSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.errors = false;
    },
    getUserError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.errors = false;
    },
    getAllUsersError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
    registerUserSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.errors = false;
    },
    registerUserError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
  },
});
export default slice.reducer;
// Actions
const {
  getUserSuccess,
  getUserError,
  getAllUsersError,
  getAllUsersSuccess,
  registerUserSuccess,
  registerUserError,
} = slice.actions;

export const registerUser = (data) => async (dispatch) => {
  try {
    const res = await http.post(`${api.REGISTER_USER}`, data);
    dispatch(registerUserSuccess(res.data));
    toast.success('User registered successfully ', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (e) {
    dispatch(registerUserError(e.message));
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const res = await http.get(`${api.GET_USER}/${id}`);
    dispatch(getUserSuccess(res.data));
  } catch (e) {
    dispatch(getUserError(e.message));
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await http.get(`${api.GET_USERS}`);
    dispatch(getAllUsersSuccess(res.data));
  } catch (e) {
    dispatch(getAllUsersError(e.message));
  }
};
