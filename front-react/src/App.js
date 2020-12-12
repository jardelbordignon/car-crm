import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import { Button, TextField } from '@material-ui/core'
import { MdPayment } from 'react-icons/md'

import Routes from './Routes'

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
      <Routes />
    </ThemeProvider>
  )
}