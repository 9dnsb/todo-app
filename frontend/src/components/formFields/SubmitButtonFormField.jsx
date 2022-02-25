import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

function SubmitButtonFormField({ aName }) {
  return (
    <Button
      type="submit"
      variant="contained"
      fullWidth
      endIcon={<ArrowForwardIosIcon />}
    >
      {aName}
    </Button>
  )
}

SubmitButtonFormField.propTypes = {
  aName: PropTypes.string,
}

export default SubmitButtonFormField
