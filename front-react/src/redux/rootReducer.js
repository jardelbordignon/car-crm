import { combineReducers } from 'redux'

import loadingReducer from './loading/loadingReducer'
import notifyReducer from './nofity/notifyReducer' 
import alertReducer from './alert/alertReducer'
import authReducer from './auth/authReducer'

const rootReducer = combineReducers({
  loadingReducer, notifyReducer, alertReducer, authReducer
})

export default rootReducer