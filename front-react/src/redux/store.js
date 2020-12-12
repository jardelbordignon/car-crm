import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import rootReducer from './rootReducer'

const middleware = [ReduxThunk]

export const store = createStore(rootReducer, applyMiddleware(...middleware))