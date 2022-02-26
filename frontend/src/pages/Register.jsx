import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import BoxForm from '../components/formFields/BoxForm'
import TitleFormField from '../components/formFields/TitleFormField'
import EmailFormField from '../components/formFields/EmailFormField'
import { onChangeFuncForm } from '../js/onChangeFuncForm'
import PasswordFormField from '../components/formFields/PasswordFormField'
import SubmitButtonFormField from '../components/formFields/SubmitButtonFormField'
import TextFormField from '../components/formFields/TextFormField'
import { defFormObj } from '../js/defaultObjects'
import { setError } from '../js/setStateFormError'
import ButtonFormField from '../components/formFields/ButtonFormField'

function Register() {
  const [formData, setFormData] = useState({
    name: defFormObj('name'),
    email: defFormObj('email'),
    password: defFormObj('password'),
    password2: defFormObj('password2'),
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

    setError(formData, setFormData)

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
              label="Username"
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
            <ButtonFormField
              to={'/login'}
              text="Sign in to an existing account"
            />
          </>
        }
        onSubmit={onSubmit}
      ></BoxForm>
    </>
  )
}

export default Register
