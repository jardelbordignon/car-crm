import { actionTypes } from './alertActions'

const initialState = {
  open: false,
  time: 3000,
  msgClass: 'info',
  msgText: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case actionTypes.CHANGE_ALERT:
    return { ...state, ...payload }

  default:
    return state
  }
}
