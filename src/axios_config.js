import axios from 'axios'
// axios.defaults.withCredentials = true;
export const axiosInstance = axios.create({
  method: 'get',
  baseURL: 'https://gif-dio-StardustCrusaders.app.secoder.net',
  timeout: 5000
})
