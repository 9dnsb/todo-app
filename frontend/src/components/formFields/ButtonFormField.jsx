import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

function ButtonFormField({ to, text }) {
  return (
    <Button LinkComponent={Link} to={to}>
      {text}
    </Button>
  )
}

export default ButtonFormField
