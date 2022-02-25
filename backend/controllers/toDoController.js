const asyncHandler = require('express-async-handler')

const Todo = require('../models/toDoModel')
const UserModel = require('../models/UserModel')
const User = require('../models/UserModel')

// @desc    Get todos
// @route   GET /api/todos
// @access  Private
const getTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.find({ user: req.user.id })

  res.status(200).json(todo)
})

// @desc    Set todo
// @route   SET /api/todos
// @access  Private
const setTodo = asyncHandler(async (req, res) => {
  if (!req.body.text || !req.body.type) {
    res.status(400)
    throw new Error('Please add all fields')
  }
  const todo = await Todo.create({
    text: req.body.text,
    type: req.body.type,
    user: req.user.id,
  })
  res.status(200).json(todo)
})

// @desc    Update todo
// @route   PUT /api/todos/:id
// @access  Private

const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id)
  if (!todo) {
    res.status(400)
    throw new Error('Todo not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('user not found')
  }

  // Make sure the logged in user matches the todo user
  if (todo.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedTodo)
})

// @desc    Delete todo
// @route   DELETE /api/todos/:id
// @access  Private

const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id)
  if (!todo) {
    res.status(400)
    throw new Error('Todo not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('user not found')
  }

  // Make sure the logged in user matches the todo user
  if (todo.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }
  await todo.remove()
  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getTodo,
  updateTodo,
  setTodo,
  deleteTodo,
}
