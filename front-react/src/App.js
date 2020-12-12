import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import { Provider as ReduxProvider } from 'react-redux'

import Routes from './Routes'
import { store } from './redux/store'
import { Loading } from './components'

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
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <Loading />
        <Routes />
      </ThemeProvider>
    </ReduxProvider>
  )
}