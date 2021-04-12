import { createSlice } from '@reduxjs/toolkit';
import http from '../api/httpService';
import api from '../api/constants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Create slice name user and initialize its state.
const slice = createSlice({
  name: 'task',
  initialState: {
    task: {},
    loading: true,
    error: '',
    errors: false,
  },
  reducers: {
    sendTaskSuccess: (state, action) => {
      state.task = action.payload;
      state.loading = false;
      state.errors = false;
    },
    sendTaskError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
  },
});

export default slice.reducer;
// Actions
const { sendTaskSuccess, sendTaskError } = slice.actions;

export const sendTask = (data) => async (dispatch) => {
  try {
    const res = await http.post(`${api.SEND_TASK}`, data);
    dispatch(sendTaskSuccess, res.data);
    toast.success('Task was sent successfully ', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (e) {
    dispatch(sendTaskError(e.message));
    toast('Error');
  }
};
