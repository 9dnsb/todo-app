import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TitleFormField from '../components/formFields/TitleFormField'
import { getTodos } from '../features/todos/toDoSlice'
import Spinner from '../components/Spinner'
import TodoItem from '../components/TodoItem'
import GridBox from '../components/GridBox'
import { motion, AnimatePresence } from 'framer-motion'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { todos, isLoadingGet, isErrorGet, messageGet } = useSelector(
    (state) => state.todos
  )
  const { isLoadingDelete } = useSelector((state) => state.todos)
  const { isLoadingUpdate, isErrorUpdate, isSuccessUpdate } = useSelector(
    (state) => state.todos
  )
  useEffect(() => {
    if (isErrorUpdate) {
      console.log(isErrorUpdate)
    }
    if (isSuccessUpdate) {
    }
    if (isErrorGet) {
      console.log(messageGet)
    }

    if (!user) {
      navigate('/login')
    }
    if (!isSuccessUpdate) {
      dispatch(getTodos())
    }

    return () => {
      // dispatch(reset())
    }
  }, [
    user,
    navigate,
    isErrorGet,
    isErrorUpdate,
    isSuccessUpdate,
    messageGet,
    dispatch,
  ])

  if (isLoadingGet) {
    return <Spinner />
  }
  return (
    <>
      {isLoadingDelete && <Spinner />}
      {isLoadingUpdate && <Spinner />}
      <TitleFormField aTitle={`Welcome ${user && user.name}`} />

      {todos.length > 0 ? (
        <GridBox
          children={
            <>
              {/* {console.log(todos)} */}
              <TitleFormField
                aTitle={'Current Todo Items'}
                align="left"
                variant="subtitle1"
                component="h2"
              />
              <AnimatePresence>
                {todos.map((todo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <TodoItem todo={todo} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </>
          }
        ></GridBox>
      ) : (
        <TitleFormField
          aTitle={'You have not set any To-dos'}
          align="left"
          variant="body1"
          component="h2"
        />
      )}
    </>
  )
}

export default Dashboard
