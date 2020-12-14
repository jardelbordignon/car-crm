import { actionTypes } from './notifyActions'

const initialState = {
  open: false,
  horizontal: 'center',
  vertical: 'top',
  time: 3000,
  msgClass: 'info',
  msgText: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case actionTypes.CHANGE_NOTIFY:
    return { ...state, ...payload }

  default:
    return state
  }
}
