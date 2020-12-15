import { Http } from '../../config/Http'
import { changeLoading } from '../loading/loadingActions'
import { changeNotify } from '../nofity/notifyActions'

export const actionTypes = {
  CHANGE_AUTH: 'CHANGE_AUTH',
  SUCCESS_AUTH: 'SUCCESS_AUTH'
}

export const changeAuth = payload => ({
  type: actionTypes.CHANGE_AUTH, payload
})

export const successAuth = payload => ({
  type: actionTypes.SUCCESS_AUTH, payload
})

export const setUserToken = token => dispatch => {
  localStorage.setItem('access_token', token)
  dispatch( changeAuth({ name:'', email:'', password:'' }) )
  dispatch( successAuth(true) )
}

export const signin = credentials => dispatch => {
  dispatch( changeLoading({open: true, msgText: 'Autenticando...'}) )
  return Http.post('oauth/token', {
    grant_type: "password",
    client_id: 2,
    client_secret: "YmYAYWubigICOmqgVYBvFHpy4z3Bx7Y6C0VMaMn8",
    username: credentials.email,
    password: credentials.password
  })
  .then(res => {
    dispatch( changeLoading({open: false}) )
    if (typeof res !== 'undefined') {
      if (res.data.access_token)
        dispatch( setUserToken(res.data.access_token) )
    }
  })
  .catch(error => {
    dispatch( changeLoading({open: false}) )

    if (typeof error.response !== 'undefined') {
      const msgText = ([400, 401].includes(error.response.status)) 
        ? 'E-mail e/ou senha incorretos'
        : 'Erro ao conectar com o servidor'
        console.log(msgText)
      
      dispatch( changeNotify({ open: true, msgText, msgClass: 'danger' }) )
    }
  })
}
