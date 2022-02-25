import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
function TitleFormField({ aTitle, variant, component, align }) {
  return (
    <Typography
      variant={variant}
      component={component}
      gutterBottom
      align={align}
    >
      {aTitle}
    </Typography>
  )
}

TitleFormField.defaultProps = {
  variant: 'h6',
  component: 'h1',
  align: 'center',
}

TitleFormField.propTypes = {
  aTitle: PropTypes.string,
  variant: PropTypes.string,
  component: PropTypes.string,
  align: PropTypes.string,
}

export default TitleFormField
