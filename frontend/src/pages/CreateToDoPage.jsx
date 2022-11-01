import RadioGroup from '@mui/material/RadioGroup'

import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TitleFormField from '../components/formFields/TitleFormField'
import BoxForm from '../components/formFields/BoxForm'
import SubmitButtonFormField from '../components/formFields/SubmitButtonFormField'
import TextFormField from '../components/formFields/TextFormField'
import { useEffect, useState } from 'react'
import { defFormObj } from '../js/defaultObjects'
import { onChangeFuncForm } from '../js/onChangeFuncForm'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo, reset } from '../features/todos/toDoSlice'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import { setError } from '../js/setStateFormError'
import { changeStateObjectData } from '../js/changeStateObjectData'
import RadioFormControlLabel from '../components/formFields/RadioFormControlLabel'

function CreateToDoPage() {
  const [formData, setFormData] = useState({
    text: defFormObj('text'),
    type: defFormObj('type'),
  })
  const radioOptions = ['Groceries', 'Money', 'Reminders', 'Work']

  const { isLoadingCreate, isErrorCreate, isSuccessCreate, messageCreate } =
    useSelector((state) => state.todos)

  const dispatch = useDispatch()

  useEffect(() => {
    if (isErrorCreate) {
      toast.error(messageCreate)
    }

    if (isSuccessCreate) {
      toast.success('Todo Created')
      changeStateObjectData(setFormData, 'text', 'aString', '')
      changeStateObjectData(setFormData, 'type', 'aString', '')
    }
    dispatch(reset())
  }, [isErrorCreate, isSuccessCreate, messageCreate, dispatch])

  const { text, type } = formData

  const onSubmit = (e) => {
    e.preventDefault()
    const submitData = {
      text: text.aString,
      type: type.aString,
    }
    setError(formData, setFormData)
    dispatch(createTodo(submitData))
  }

  return (
    <>
      {isLoadingCreate && <Spinner />}
      <BoxForm
        titleInfo={
          <>
            <TitleFormField aTitle="Create To-do" />
          </>
        }
        formInfo={
          <>
            <TextFormField
              onChange={(e) => onChangeFuncForm(setFormData, e)}
              name={text}
              label="To-do Title"
            />

            <FormControl>
              <fieldset>
                <legend id="note_category">
                  <FormLabel required error={type.error} sx={{ mx: 1 }}>
                    Note Category
                  </FormLabel>
                </legend>

                <RadioGroup
                  aria-labelledby="note_category"
                  value={type.aString}
                  onChange={(e) => onChangeFuncForm(setFormData, e, 'type')}
                >
                  {radioOptions.map((radio, index) => (
                    <RadioFormControlLabel value={radio} key={index} />
                  ))}
                </RadioGroup>
              </fieldset>
            </FormControl>

            <SubmitButtonFormField aName="Create To-do" />
          </>
        }
        onSubmit={onSubmit}
      ></BoxForm>
    </>
  )
}

export default CreateToDoPage
