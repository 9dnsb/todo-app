import PropTypes from 'prop-types'
import GridBox from '../GridBox'

function BoxForm({ titleInfo, formInfo, onSubmit }) {
  return (
    <GridBox
      gap={2}
      children={
        <>
          {titleInfo}
          <form noValidate onSubmit={onSubmit}>
            <GridBox children={formInfo}></GridBox>
          </form>
        </>
      }
    ></GridBox>
  )
}
BoxForm.propTypes = {
  titleInfo: PropTypes.object,
  formInfo: PropTypes.object,
  onSubmit: PropTypes.func,
}

export default BoxForm
