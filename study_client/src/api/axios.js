import axios from 'axios';

export default axios.create({
  baseURL: 'https://freecampus-back.onrender.com/',    //server on render
  // baseURL: 'http://localhost:3001/',  Server local
  withCredentials: true, 
});