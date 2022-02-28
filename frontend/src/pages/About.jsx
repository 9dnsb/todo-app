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
            This website is a simple Todo project. Its my first attempt creating
            a website using the MERN stack. Its also my first time using
            Material UI.
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
