import Axios from 'axios'
import Config from './Config'

const Http = Axios.create(Config);

Http.interceptors.request.use(function (config) {
 console.log("Config-", config)
 return config;
}, function (error) {
 return Promise.reject(error);
});

Http.interceptors.response.use(function (response) {
 console.log("Response-", response)
 return response;
}, function (error) {
 return Promise.reject(error);
});

export default Http;
