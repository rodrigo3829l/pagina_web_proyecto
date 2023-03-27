import axios from 'axios'

const api = axios.create({
  // baseURL: 'https://pproyectapi.onrender.com/api/v1',
  // baseURL: 'https://project-api-neon.vercel.app/api/v1',
  baseURL: 'http://localhost:5000/api/v1',
  withCredentials: true
})

export {api}
