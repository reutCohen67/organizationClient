import { createSlice } from '@reduxjs/toolkit';
import http from '../api/httpService';
import api from '../api/constants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Create slice name user and initialize its state.
const slice = createSlice({
  name: 'report',
  initialState: {
    report: {},
    loading: true,
    error: '',
    errors: false,
  },
  reducers: {
    sendReportsSuccess: (state, action) => {
      state.report = action.payload;
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
const { sendReportsSuccess, sendReportError } = slice.actions;

export const sendReport = (data) => async (dispatch) => {
  try {
    const res = await http.post(`${api.SEND_REPORT}`, data);
    dispatch(sendReportsSuccess(res.data));
    toast.success('Report was sent successfully ', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (e) {
    dispatch(sendReportError(e.message));
  }
};
