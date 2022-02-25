import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'

function TextFormField({ onChange, name }) {
  return (
    <TextField
      type="text"
      label="Username"
      id="name"
      variant="outlined"
      fullWidth
      required
      onChange={onChange}
      error={name.error}
    ></TextField>
  )
}

TextFormField.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.object,
}

export default TextFormField
