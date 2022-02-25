import axios from 'axios'
import { toast } from 'react-toastify'

const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    toast.success('Logged In')
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout
const logout = () => {
  localStorage.removeItem('user')
  toast.info('Logged Out')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
