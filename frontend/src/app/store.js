import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import toDoReducer from '../features/todos/toDoSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: toDoReducer,
  },
})
