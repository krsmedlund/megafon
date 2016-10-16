import {handleActions} from 'redux-actions'
import {ADD_EVENT, SET_CHANNEL_FILTER} from 'constants'

const initialState = {
  channelFilter: null,
  bucket: []
}

export default handleActions({
  [ADD_EVENT] (state, action) {
    return [action.payload, ...state]

  [SET_CHANNEL_FILTER] (state, action) {
    return Object.assign({}, state, {
      channelFilter: action.channelFilter
    })
  }
}, initialState)
