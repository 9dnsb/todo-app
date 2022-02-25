import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TitleFormField from '../components/formFields/TitleFormField'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [category, setCategory] = useState('todos')

  const { user } = useSelector((state) => state.auth)
  // const { isLoading, isError, message } = useSelector((state) => state.goals)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate, dispatch])

  return (
    <>
      <TitleFormField aTitle={`Welcome ${user && user.name}`} />

      <FormControl>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <FormControlLabel value="money" control={<Radio />} label="Money" />
          <FormControlLabel value="todos" control={<Radio />} label="Todos" />
          <FormControlLabel
            value="reminders"
            control={<Radio />}
            label="Reminders"
          />
          <FormControlLabel value="work" control={<Radio />} label="Work" />
        </RadioGroup>
      </FormControl>
    </>
  )
}

export default Dashboard
