import { combineReducers } from 'redux'

import loadingReducer from './loading/loadingReducer'

const rootReducer = combineReducers({
  loadingReducer
})

export default rootReducer