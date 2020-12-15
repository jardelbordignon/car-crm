import { Http } from '../../config/Http'
import { changeLoading } from '../loading/loadingActions'
import { changeNotify } from '../nofity/notifyActions'
import { setUserToken } from '../auth/authActions'

export const actionTypes = {
  CHANGE_SIGNUP: 'CHANGE_SIGNUP',
  ERROR_SIGNUP: 'ERROR_SIGNUP',
  SUCCESS_SIGNUP: 'SUCCESS_SIGNUP'
}

export const changeSignup = payload => ({
  type: actionTypes.CHANGE_SIGNUP, payload
})

export const errorSignup = payload => ({
  type: actionTypes.ERROR_SIGNUP, payload
})

export const successSignup = payload => ({
  type: actionTypes.SUCCESS_SIGNUP, payload
})


export const signup = data => dispatch => {
  dispatch( changeLoading({open: true, msgText: 'Salvando registro...'}) )
  return Http.post('/signup', data)
    .then(res => {
      dispatch( changeLoading({open: false}) )
      if (typeof res !== 'undefined' && !!res.data.access_token) {
        dispatch( changeNotify({
          open: true, msgClass: 'success', msgText: 'Usuário cadastrado com sucesso'
        }) )
        dispatch( setUserToken(res.data.access_token) )
        dispatch( successSignup(true) )
      }
    })
    .catch(err => {
      dispatch( changeLoading({open: false}) )
      if (err.response) dispatch( errorSignup(err.response.data.errors) )
    })
}
