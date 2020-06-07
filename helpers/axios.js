import axios from 'axios';
import CONSTANTS from './constants';

export default axios.create({
  baseURL: CONSTANTS.siteRoot + '/api',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  responseType: 'json',
  // headers: {Accept: 'application/json', Authorization: token},
});
