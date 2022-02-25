import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { changeStateObjectData } from '../js/changeStateObjectData'
import BoxForm from '../components/formFields/BoxForm'
import TitleFormField from '../components/formFields/TitleFormField'
import EmailFormField from '../components/formFields/EmailFormField'
import { onChangeFuncForm } from '../js/onChangeFuncForm'
import PasswordFormField from '../components/formFields/PasswordFormField'
import SubmitButtonFormField from '../components/formFields/SubmitButtonFormField'
import TextFormField from '../components/formFields/TextFormField'

function Register() {
  const [formData, setFormData] = useState({
    name: { aString: '', error: false },
    email: { aString: '', error: false },
    password: { aString: '', error: false },
    password2: { aString: '', error: false },
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onSubmit = (e) => {
    e.preventDefault()

    for (var key in formData) {
      if (formData.hasOwnProperty(key)) {
        if (formData[key]['aString'] === '') {
          changeStateObjectData(setFormData, key, 'error', true)
        }
      }
    }

    if (password.aString !== password2.aString) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name: name.aString,
        email: email.aString,
        password: password.aString,
      }
      // console.log(userData)
      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <BoxForm
        titleInfo={
          <>
            <TitleFormField aTitle="Register" />
          </>
        }
        formInfo={
          <>
            <TextFormField
              onChange={(e) => onChangeFuncForm(setFormData, e)}
              name={name}
            />
            <EmailFormField
              onChange={(e) => onChangeFuncForm(setFormData, e)}
              email={email}
            />
            <PasswordFormField
              onChange={(e) => onChangeFuncForm(setFormData, e)}
              password={password}
            />
            <PasswordFormField
              onChange={(e) => onChangeFuncForm(setFormData, e)}
              password={password2}
              aLabel="Confirm Password"
              aId="password2"
            />
            <SubmitButtonFormField aName="Register" />
          </>
        }
        onSubmit={onSubmit}
      ></BoxForm>
    </>
  )
}

export default Register
