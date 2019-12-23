import { isProd } from './env';

export const API_URL = '/api';
//export const API_URL = isProd() ? 'https://api.wingalpha.com/api/' : 'https://api-dev.wingalpha.com/api/';

export const DUE_DATE_FORMAT = 'MMMM Do';
export const LONG_DATE_FORMAT = 'MMMM D, YYYY';
export const SHORT_DATE_FORMAT = 'D MMM YY'
