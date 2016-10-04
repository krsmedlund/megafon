import {handleActions} from 'redux-actions'
import {ADD_EVENT} from 'constants'

const initialState = [
  {
    kind: 'info',
    title: 'Important information',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  {
    kind: 'bell',
    title: 'Super important information!',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },

  {
    kind: 'tweet',
    description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. #sometag'
  }
]

export default handleActions({
  [ADD_EVENT] (state, action) {
    return [action.payload, ...state]
  }
}, initialState)
