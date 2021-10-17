import Axios from 'axios'
import Config from './Config'
import { getToken } from '../js/Cookie'

const Http = Axios.create(Config);

Http.interceptors.request.use(function (config) {
 // console.log("Config-", config)

 /* if (config.url !== '/auth/login') {
   if (getToken()) {
   config.headers['Authorization'] = 'Bearer ' + getToken()
  }
 } */

 return config;
}, function (error) {
 return Promise.reject(error);
});

Http.interceptors.response.use(function (response) {
 // console.log("Response-", response)

 return response;
}, function (error) {
 return Promise.reject(error);
});

export default Http;
