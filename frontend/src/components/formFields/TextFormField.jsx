import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'

function TextFormField({ onChange, name, label, variant }) {
  return (
    <TextField
      type="text"
      label={label}
      id={name.name}
      value={name.aString}
      variant={variant}
      fullWidth
      required
      onChange={onChange}
      error={name.error}
    ></TextField>
  )
}

TextFormField.defaultProps = {
  variant: 'outlined',
}

TextFormField.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.object,
  label: PropTypes.string,
}

export default TextFormField
