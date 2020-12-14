import { Typography, TextField, Button } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { changeAuth, signin, successAuth } from '../redux/auth/authActions'

export default function SignIn() {
  const dispatch = useDispatch()
  const { credentials, success } = useSelector( state => state.authReducer )

  return (
    <div className='d-flex bg-white min-vh-100'>
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-4'>
            <div className='form-group text-center'>
              <img src="/assets/logo.png" alt="CAR CRM" height="48" />
              <Typography className='mt-3' variant='h6' component='h1'>Plataforma para Revenda de Veículos</Typography>
            </div>

            <TextField
              label='E-mail'
              type='email'
              autoComplete='email'
              value={credentials.email}
              onChange={e => dispatch(changeAuth({email: e.target.value}))}
              margin='normal' />
            
            <TextField
              label='Senha'
              type='password'
              value={credentials.password}
              onChange={e => dispatch(changeAuth({password: e.target.value}))}
              margin='normal' />

            <Button
              variant='contained'
              color='primary'
              fullWidth
              size='large'
              className='my-4'
              onClick={() => dispatch( signin(credentials) )}>
              Entrar
            </Button>

            { success && <Redirect to='/' /> }
          </div>
        </div>
      </div>
    </div>
  )
}
