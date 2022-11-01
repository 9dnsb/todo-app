import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteTodo, updateTodo } from '../features/todos/toDoSlice'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
function TodoItem({ todo, index }) {
  const dispatch = useDispatch()

  const buttonCSS = (right) => ({
    position: 'absolute',
    top: 5,
    right: right,
  })
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState('')

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  useEffect(() => {
    setText(todo.text)
    if (editing === true) {
      setText(todo.text)
    }
  }, [editing, todo])

  return (
    <Card sx={{ minWidth: 275, position: 'relative' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Todo #{index + 1}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Todo Type: {todo.type}
        </Typography>
        {!editing ? (
          <Typography variant="body2">{text}</Typography>
        ) : (
          <TextField
            label="To-do Title"
            variant="standard"
            value={text}
            onChange={(e) => {
              handleTextChange(e)
            }}
          />
        )}

        <IconButton
          onClick={() => dispatch(deleteTodo(todo._id))}
          color="primary"
          size="small"
          aria-label="delete"
          sx={buttonCSS('0')}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
        {!editing ? (
          <IconButton
            onClick={() => {
              setEditing(!editing)
            }}
            color="primary"
            size="small"
            aria-label="edit"
            sx={buttonCSS('30px')}
          >
            <ModeEditIcon fontSize="small" />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              setEditing(!editing)
              if (editing) {
                dispatch(
                  updateTodo({
                    id: todo._id,
                    text: text,
                    type: todo.type,
                  })
                )
              }
            }}
            color="primary"
            size="small"
            aria-label="accept-edit"
            sx={buttonCSS('30px')}
          >
            <CheckIcon fontSize="small" />
          </IconButton>
        )}
      </CardContent>
    </Card>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
}

export default TodoItem
