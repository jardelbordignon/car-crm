import { Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core'

export default function Confirm({ open, title, onClose, onConfirm }) {
  return (
    <div>
      <Dialog open={open} onClose={onClose} onConfirm={onConfirm}>
        <DialogTitle disabledTypography>
          <strong>{title || 'Deseja mesmo excluir esse registro?'}</strong>
        </DialogTitle>
        <DialogActions className='d-flex flex-center'>
          <Button onClick={() => {}}>Não</Button>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => {onClose(); onConfirm();}}>Sim</Button>
        </DialogActions>
      </Dialog>    
    </div>
  )
}
