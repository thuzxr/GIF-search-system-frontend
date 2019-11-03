import axios from 'axios'
// axios.defaults.withCredentials = true;
export const axiosInstance = axios.create({
  method: 'get',
  baseURL: 'http://183.172.82.157:8000',//'https://gif-dio-StardustCrusaders.app.secoder.net',
  timeout: 5000
})
