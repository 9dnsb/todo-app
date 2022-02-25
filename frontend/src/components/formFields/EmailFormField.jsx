import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'

function EmailFormField({ onChange, email }) {
  return (
    <TextField
      type="email"
      label="Email"
      id="email"
      variant="outlined"
      fullWidth
      required
      onChange={onChange}
      error={email.error}
    ></TextField>
  )
}

EmailFormField.propTypes = {
  onChange: PropTypes.func,
  email: PropTypes.object,
}

export default EmailFormField
