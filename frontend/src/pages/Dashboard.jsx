import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TitleFormField from '../components/formFields/TitleFormField'
import { getTodos, reset } from '../features/todos/toDoSlice'
import Spinner from '../components/Spinner'
import TodoItem from '../components/TodoItem'
import GridBox from '../components/GridBox'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { todos, isLoadingGet, isErrorGet, messageGet } = useSelector(
    (state) => state.todos
  )
  useEffect(() => {
    if (isErrorGet) {
      console.log(messageGet)
    }

    if (!user) {
      navigate('/login')
    }
    dispatch(getTodos())
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isErrorGet, messageGet, dispatch])

  if (isLoadingGet) {
    return <Spinner />
  }
  return (
    <>
      <TitleFormField aTitle={`Welcome ${user && user.name}`} />

      <TitleFormField
        aTitle={'Current Todo Items'}
        align="left"
        variant="subtitle1"
        component="h3"
      />

      {todos.length > 0 ? (
        <GridBox
          children={
            <>
              {todos.map((todo, index) => (
                <TodoItem todo={todo} index={index} key={index} />
              ))}
            </>
          }
        ></GridBox>
      ) : (
        <h3> You have not set any goals </h3>
      )}
    </>
  )
}

export default Dashboard
