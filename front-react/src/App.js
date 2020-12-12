import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import { Button, TextField } from '@material-ui/core'
import { MdPayment } from 'react-icons/md'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    }
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true
    },
    MuiSelect: {
      variant: 'outlined',
      fullWidth: true
    }
  }
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1 className='text-danger'>App React</h1>
      <Button variant='contained'>Default</Button>
      <Button variant='contained' color='primary'>Primary</Button>
      <Button variant='contained' color='secondary'>Secondary</Button>
      <TextField />
      <MdPayment style={{fontSize: 60, color: '#ccc'}} />
    </ThemeProvider>
  )
}