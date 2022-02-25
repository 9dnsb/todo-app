import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

function GridBox({ children, gap }) {
  return <Box sx={{ display: 'grid', gap: 3, mb: 3 }}>{children}</Box>
}

GridBox.defaultProps = {
  gap: 3,
}

GridBox.propTypes = {
  gap: PropTypes.number,
}

export default GridBox
