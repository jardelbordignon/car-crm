import { Modal, Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { MdInfo, MdCheckCircle, MdWarning, MdError } from 'react-icons/md' 

import { changeAlert } from '../redux/alert/alertActions'

export default function Alert() {
  const dispatch = useDispatch()
  const { open, time, msgClass, msgText } = useSelector( state => state.alertReducer )

   if (open)
     setTimeout(() => dispatch(changeAlert({open: false}) ), time)

  return (
    <Modal
      open={open}
      autoHideDuration={time}
      onClose={() => dispatch(changeAlert({open: false}))}
      className='d-flex flex-center h-100'>

      <div className='d-flex align-items-center bg-white rounded-2 p-2'>
        {msgClass==='info'    && <MdInfo        style={{fontSize: '2.5rem'}} className='mr-1 text-info' /> }
        {msgClass==='success' && <MdCheckCircle style={{fontSize: '2.5rem'}} className='mr-1 text-success' /> }
        {msgClass==='warning' && <MdWarning     style={{fontSize: '2.5rem'}} className='mr-1 text-warning' /> }
        {msgClass==='danger'  && <MdError       style={{fontSize: '2.5rem'}} className='mr-1 text-danger' /> }
        <Typography variant='subtitle2'><strong>{msgText}</strong></Typography>
      </div>

    </Modal>
  )
}
