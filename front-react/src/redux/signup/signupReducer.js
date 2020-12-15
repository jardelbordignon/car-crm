import { actionTypes } from './signupActions'

const initialState = {
  user: {
    name: '', email: '', password: ''
  },
  success: false,
  error: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_SIGNUP:
      return { ...state, user: {...state.user, ...payload}}

    case actionTypes.SUCCESS_SIGNUP:
      return { ...state, success: payload}
      
    case actionTypes.ERROR_SIGNUP:
      return { ...state, error: payload }
      
    default:
      return state
  }
}
