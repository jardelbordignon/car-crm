import { Typography, TextField, Button } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import { changeSignup, errorSignup, successSignup, signup } from '../redux/signup/signupActions'

export default function SignUp() {
  const dispatch = useDispatch()
  const { user, success, error } = useSelector( state => state.signupReducer )

  return (
    <div className='d-flex bg-white min-vh-100'>
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-4'>
            <div className='form-group text-center'>
              <img src="/assets/logo.png" alt="CAR CRM" height="48" />
              <Typography className='mt-3' variant='h6' component='h1'>
                Crie sua conta, teste grátis!
              </Typography>
            </div>

            <TextField
              error={!!error.name}
              label='Nome'
              value={user.name}
              onChange={e => {
                dispatch(changeSignup({name: e.target.value}))
                if (error.name) delete error.name
              }}
              margin='normal' />
            { error.name && 
              <strong className='text-danger'>{error.name[0]}</strong>
            }

            <TextField
              error={!!error.email}
              label='E-mail'
              type='email'
              autoComplete='email'
              value={user.email}
              onChange={e => dispatch(changeSignup({email: e.target.value}))}
              margin='normal' />
            { error.email && 
              <strong className='text-danger'>{error.email[0]}</strong>
            }
            

            <TextField
              error={!!error.password}
              label='Senha'
              type='password'
              value={user.password}
              onChange={e => dispatch(changeSignup({password: e.target.value}))}
              margin='normal' />
            { error.password && 
              <strong className='text-danger'>{error.password[0]}</strong>
            }
          

            <Button
              variant='contained'
              color='primary'
              fullWidth
              size='large'
              className='my-4'
              onClick={() => dispatch( signup(user) )}>
              Continuar
            </Button>

            <div className='text-center'>
              Já tem uma conta?
              <Link className='link-primary' to='/signin'> Fazer Login</Link>
            </div>

            { success && <Redirect to='/vehicles' /> }
          </div>
        </div>
      </div>
    </div>
  )
}
