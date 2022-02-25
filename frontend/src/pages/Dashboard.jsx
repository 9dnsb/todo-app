import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  // const { isLoading, isError, message } = useSelector((state) => state.goals)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate, dispatch])

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <RadioGroup>
        <FormControlLabel value="money" control={<Radio />} label="Money" />
      </RadioGroup>
    </>
  )
}

export default Dashboard
