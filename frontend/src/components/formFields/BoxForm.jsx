import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

function BoxForm({ titleInfo, formInfo, onSubmit }) {
  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      {titleInfo}
      <form noValidate onSubmit={onSubmit}>
        <Box sx={{ display: 'grid', gap: 3 }}>{formInfo}</Box>{' '}
      </form>
    </Box>
  )
}
BoxForm.propTypes = {
  titleInfo: PropTypes.object,
  formInfo: PropTypes.object,
  onSubmit: PropTypes.func,
}

export default BoxForm
