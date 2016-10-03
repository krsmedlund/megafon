import {routerReducer as routing} from 'react-router-redux'
import {combineReducers} from 'redux'
import events from './events'

export default combineReducers({
  routing,
  events
})
