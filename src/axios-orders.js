import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-burger-builder-3ec3d.firebaseio.com/'
});

export default instance;
