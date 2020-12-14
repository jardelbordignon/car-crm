import { combineReducers } from 'redux'

import loadingReducer from './loading/loadingReducer'
import notifyReducer from './nofity/notifyReducer' 
import alertReducer from './alert/alertReducer'

const rootReducer = combineReducers({
  loadingReducer, notifyReducer, alertReducer
})

export default rootReducer