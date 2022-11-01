import TitleFormField from '../components/formFields/TitleFormField'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import GridBox from '../components/GridBox'
import { accessibilityText } from 'npmtestdb99'

function About() {
  return (
    <GridBox
      children={
        <>
          <TitleFormField aTitle="About" component="h1" />
          <Typography variant="body1" gutterBottom>
            A simple To-do project. Uses MERN Stack, Material UI, Axios, Redux.
          </Typography>
          <Typography variant="body1" gutterBottom>
            I spent a lot of time refactoring the website and have tried to
            minimize duplicate code. Feel free to review the code on my{' '}
            <Link
              href="https://github.com/9dnsb/todo-app"
              target="_blank"
              rel="noopener"
            >
              GitHub page
            </Link>
            .
          </Typography>
          <Typography variant="body1" gutterBottom>
            {accessibilityText}
          </Typography>
        </>
      }
    ></GridBox>
  )
}

export default About
