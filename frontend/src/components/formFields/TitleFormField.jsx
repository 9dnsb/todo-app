import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
function TitleFormField({ aTitle }) {
  return (
    <Typography variant="h6" component="h2" gutterBottom align="center">
      {aTitle}
    </Typography>
  )
}

TitleFormField.propTypes = {
  aTitle: PropTypes.string,
}

export default TitleFormField
