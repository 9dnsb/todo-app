import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

function Spinner() {
  return (
    <Box
      sx={{
        display: 'flex',
        zIndex: 5000,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
      }}
    >
      <CircularProgress size={55} />
    </Box>
  )
}
export default Spinner
