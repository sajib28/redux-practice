import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {allReducers} from './reducer'
export const store =  createStore(allReducers,composeWithDevTools(applyMiddleware(logger,thunk)))