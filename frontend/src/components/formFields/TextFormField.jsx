import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'

function TextFormField({ onChange, name, label }) {
  return (
    <TextField
      type="text"
      label={label}
      id={name.name}
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
  label: PropTypes.string,
}

export default TextFormField
