import axios from 'axios'

const API = axios.create({
  baseURL: 'https://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add token to requests automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Authentication API endpoints
export const authAPI = {
  login: async (email, password) => {
    return API.post('/auth/login', { email, password })
  },
  register: async (email, password) => {
    return API.post('/auth/register', { email, password })
  }
}

export default API
