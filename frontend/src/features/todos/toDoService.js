import axios from 'axios'

const API_URL = '/api/todos/'

// Create new todo
const createTodo = async (toDoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, toDoData, config)

  return response.data
}

// Get user todos
const getTodos = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user todo
const deleteTodo = async (toDoId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + toDoId, config)

  return response.data
}

const toDoService = {
  createTodo,
  getTodos,
  deleteTodo,
}

export default toDoService
