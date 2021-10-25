interface IConfig {
 [key: string]: string | number | boolean | object | undefined
}

const APP_URL = `${process.env.MIX_APP_URL}/api`

const config: IConfig = {
 baseURL: APP_URL,
 headers: {
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
 },
 timeout: 1000,
 withCredentials: true,
 responseType: 'json',
 responseEncoding: 'utf8',
 // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
 xsrfCookieName: 'XSRF-TOKEN', // default
 // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
 xsrfHeaderName: 'X-XSRF-TOKEN', // default
 /*
 // `onUploadProgress` allows handling of progress events for uploads
 // browser only
 onUploadProgress: function (progressEvent) {
   // Do whatever you want with the native progress event
 },

 // `onDownloadProgress` allows handling of progress events for downloads
 // browser only
 onDownloadProgress: function (progressEvent) {
   // Do whatever you want with the native progress event
 },
 maxContentLength: 2000,
 maxBodyLength: 2000,
 validateStatus: function (status) {
   return status >= 200 && status < 300; // default
 },
 maxRedirects: 5,

*/

};

export default config;
