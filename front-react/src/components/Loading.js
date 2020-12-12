import { Typography, Modal, CircularProgress } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import { changeLoading } from '../redux/loading/loadingActions'

export default function Loading() {
  const dispatch = useDispatch()
  const loading = useSelector( state => state.loadingReducer )

  return (
    <Modal open={loading.open}
      onClose={() => dispatch( changeLoading({open: false}) )}
      className='d-flex flex-center h-100'>
      
      <div className='bg-white d-flex align-items-center rounded-2 p-3 outline-0'>
        <CircularProgress size={25} className='mr-2' />
        <Typography variant='subtitle1'>{loading.msg}</Typography>
      </div>
    </Modal>
  )
}
