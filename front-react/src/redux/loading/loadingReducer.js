import { actionTypes } from './loadingActions'

const initialState = {
  open: false,
  msg: 'Carregando ...'
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case actionTypes.CHANGE_LOADING:
    return { ...state, ...payload }

  default:
    return state
  }
}
