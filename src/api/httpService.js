import axios from 'axios';
import globalConstants from '../constants/globalConstants';

const { BASE_API } = globalConstants;

const api = axios.create({
  baseURL: BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: api.get,
  post: api.post,
  put: api.put,
  delete: api.delete,
};
