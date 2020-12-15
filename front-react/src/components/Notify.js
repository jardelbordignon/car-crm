import { Snackbar, SnackbarContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { blue, green, red } from '@material-ui/core/colors'

import { changeNotify } from '../redux/nofity/notifyActions'

const useStyles = makeStyles({
  info: {
    backgroundColor: blue[300]
  }, 
  success: {
    backgroundColor: green[300]
  }, 
  error: {
    backgroundColor: red[400]
  }
})

export default function Notify() {
  const dispatch = useDispatch()
  const notifyReducer = useSelector( state => state.notifyReducer )
  const { open, horizontal, vertical, time, msgClass, msgText } = notifyReducer
  const classes = useStyles()

  const klass = msgClass==='danger' ? 'error' : msgClass
  
  return (
    <Snackbar
      anchorOrigin={{ horizontal, vertical }}
      open={open}
      autoHideDuration={time}
      onClose={() => dispatch( changeNotify({open: false}) )}>

      <SnackbarContent
        className={`${classes[klass]} d-flex  justify-content-center`}
        message={<span>{msgText}</span>} />

    </Snackbar>
  )
}
