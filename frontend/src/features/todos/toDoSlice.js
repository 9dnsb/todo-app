import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import toDoService from './toDoService'

const initialState = {
  todos: [],
  isErrorCreate: false,
  isSuccessCreate: false,
  isLoadingCreate: false,
  isErrorGet: false,
  isSuccessGet: false,
  isLoadingGet: false,
  isErrorDelete: false,
  isSuccessDelete: false,
  isLoadingDelete: false,
  isErrorUpdate: false,
  isSuccessUpdate: false,
  isLoadingUpdate: false,

  message: '',
}

// Create new todo
export const createTodo = createAsyncThunk(
  'todos/create',
  async (toDoData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await toDoService.createTodo(toDoData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user todos
export const getTodos = createAsyncThunk(
  'todos/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await toDoService.getTodos(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user todo
export const deleteTodo = createAsyncThunk(
  'todos/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await toDoService.deleteTodo(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user todo
export const updateTodo = createAsyncThunk(
  'todos/put',

  async (toDoData, thunkAPI) => {
    // console.log(toDoData)
    try {
      const token = thunkAPI.getState().auth.user.token
      return await toDoService.updateTodo(
        toDoData.id,
        { text: toDoData.text, type: toDoData.type },
        token
      )
    } catch (error) {
      console.log(error)
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const toDoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTodo.pending, (state) => {
        state.isLoadingCreate = true
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.isLoadingCreate = false
        state.isSuccessCreate = true
        state.todos.push(action.payload)
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.isLoadingCreate = false
        state.isErrorCreate = true
        state.messageCreate = action.payload
      })
      .addCase(getTodos.pending, (state) => {
        state.isLoadingGet = true
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoadingGet = false
        state.isSuccessGet = true
        state.todos = action.payload
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isLoadingGet = false
        state.isErrorGet = true
        state.messageGet = action.payload
      })
      .addCase(deleteTodo.pending, (state) => {
        state.isLoadingDelete = true
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoadingDelete = false
        state.isSuccessDelete = true
        state.todos = state.todos.filter(
          (todo) => todo._id !== action.payload.id
        )
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoadingDelete = false
        state.isErrorDelete = true
        state.messageDelete = action.payload
      })
      .addCase(updateTodo.pending, (state) => {
        state.isLoadingUpdate = true
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.isLoadingUpdate = false
        state.isSuccessUpdate = true
        // console.log(action.payload)
        state.todos = state.todos.map((item) =>
          item._id === action.payload._id
            ? { ...item, ...action.payload }
            : item
        )
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.isLoadingUpdate = false
        state.isErrorUpdate = true
        state.messageUpdate = action.payload
      })
  },
})

export const { reset } = toDoSlice.actions
export default toDoSlice.reducer
