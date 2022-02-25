import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

function TodoItem({ todo, index }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Todo #{index + 1}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Todo Type: {todo.type}
        </Typography>
        <Typography variant="body2">{todo.text}</Typography>
      </CardContent>
    </Card>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
}

export default TodoItem
