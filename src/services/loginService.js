import axios from 'axios';
import config  from '../config/config';

const loginApi = config.loginUrl;

const login = (data) => {
  let raw = JSON.stringify(data);
  let headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
  return axios
    .post(loginApi, raw, {
      headers: headers,
    })
    .then((response) => {
      return response;
    })  
    .catch((err) => {
      console.log('err', err);
    });
};

export const loginService = {
    login,
};
