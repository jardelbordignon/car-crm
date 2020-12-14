import { actionTypes } from './authActions'

const initialState = {
  credentials: { email:'', password:'' },
  success: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_AUTH:
      return { ...state, credentials: {...state.credentials, ...payload} }
      
    case actionTypes.SUCCESS_AUTH:
      return { ...state, success: payload }

    default:
      return state
  }
}
