import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CreateToDoPage from './pages/CreateToDoPage'
import About from './pages/About'

const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <main>
            <Container maxWidth="sm" sx={{ mt: 4 }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/createTodo" element={<CreateToDoPage />} />
                <Route path="/editTodo" element={<CreateToDoPage />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Container>
            <ToastContainer />
          </main>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
