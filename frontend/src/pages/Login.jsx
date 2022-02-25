import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import { login, reset } from '../features/auth/authSlice'
import EmailFormField from '../components/formFields/EmailFormField'
import PasswordFormField from '../components/formFields/PasswordFormField'
import { changeStateObjectData } from '../js/changeStateObjectData'
import { onChangeFuncForm } from '../js/onChangeFuncForm'
import TitleFormField from '../components/formFields/TitleFormField'
import BoxForm from '../components/formFields/BoxForm'
import SubmitButtonFormField from '../components/formFields/SubmitButtonFormField'

function Login() {
  const [formData, setFormData] = useState({
    email: { aString: '', error: false },
    password: { aString: '', error: false },
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

    for (var key in formData) {
      if (formData.hasOwnProperty(key)) {
        if (formData[key]['aString'] === '') {
          changeStateObjectData(setFormData, key, 'error', true)
        }
      }
    }
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
