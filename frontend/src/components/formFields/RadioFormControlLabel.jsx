import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import { capitalizeFirstLetter } from '../../js/capitalizeFirstLetter'
import PropTypes from 'prop-types'

function RadioFormControlLabel({ value }) {
  return (
    <FormControlLabel
      value={value}
      control={<Radio />}
      label={capitalizeFirstLetter(value)}
    />
  )
}

RadioFormControlLabel.propTypes = {
  value: PropTypes.string,
}

export default RadioFormControlLabel
