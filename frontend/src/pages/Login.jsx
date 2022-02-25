import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import { login, reset } from '../features/auth/authSlice'
import EmailFormField from '../components/formFields/EmailFormField'
import PasswordFormField from '../components/formFields/PasswordFormField'
import { onChangeFuncForm } from '../js/onChangeFuncForm'
import TitleFormField from '../components/formFields/TitleFormField'
import BoxForm from '../components/formFields/BoxForm'
import SubmitButtonFormField from '../components/formFields/SubmitButtonFormField'
import { defFormObj } from '../js/defaultObjects'
import { setError } from '../js/setStateFormError'

function Login() {
  const [formData, setFormData] = useState({
    email: defFormObj('email'),
    password: defFormObj('password'),
  })

  const { email, password } = formData

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

    const userData = {
      email: email.aString,
      password: password.aString,
    }

    setError(formData, setFormData)
    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <BoxForm
        titleInfo={
          <>
            <TitleFormField aTitle="Login" />
          </>
        }
        formInfo={
          <>
            <EmailFormField
              onChange={(e) => onChangeFuncForm(setFormData, e)}
              email={email}
            />
            <PasswordFormField
              onChange={(e) => onChangeFuncForm(setFormData, e)}
              password={password}
            />
            <SubmitButtonFormField aName="Login" />
          </>
        }
        onSubmit={onSubmit}
      ></BoxForm>
    </>
  )
}

export default Login
