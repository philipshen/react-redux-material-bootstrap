import { combineReducers } from 'redux'

import GlobalFlash from './reducers/global-flash'
import CurrentUser from './reducers/current-user'

const reducers = combineReducers({
  CurrentUser,
  GlobalFlash,
})

export default reducers