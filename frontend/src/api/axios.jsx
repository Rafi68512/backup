import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:3000/api', // Ganti dengan URL backend Anda
  timeout: 3000,
});

export default instance;