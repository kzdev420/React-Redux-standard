import axios from 'axios';
import { API_URL } from 'app_constants';

export default () => axios.create({
  baseURL: API_URL,
  withCredentials: true,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken'
});
