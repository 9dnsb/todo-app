import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'

function PasswordFormField({ onChange, password, aLabel, aId }) {
  return (
    <TextField
      label={aLabel}
      type="password"
      id={aId}
      variant="outlined"
      fullWidth
      required
      onChange={onChange}
      error={password.error}
      autoComplete="current-password"
    ></TextField>
  )
}

PasswordFormField.defaultProps = {
  aLabel: 'Password',
  aId: 'password',
}

PasswordFormField.propTypes = {
  onChange: PropTypes.func,
  password: PropTypes.object,
  aLabel: PropTypes.string,
  aId: PropTypes.string,
}

export default PasswordFormField
