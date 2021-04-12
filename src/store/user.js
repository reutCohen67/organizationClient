import { createSlice } from '@reduxjs/toolkit';
import http from '../api/httpService';
import api from '../api/constants';

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
    sendTaskSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.errors = false;
    },
    sendTaskError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
    sendReportsSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.errors = false;
    },
    sendReportError: (state, action) => {
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
} = slice.actions;

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

export const sendTask = () => async (dispatch) => {
  try {
    const res = await http.post(`${api.SEND_TASK}`);
    dispatch(getAllUsersSuccess(res.data));
  } catch (e) {
    dispatch(getAllUsersError(e.message));
  }
};

export const sendReport = () => async (dispatch) => {
  try {
    const res = await http.post(`${api.SEND_REPORT}`);
    dispatch(getAllUsersSuccess(res.data));
  } catch (e) {
    dispatch(getAllUsersError(e.message));
  }
};
