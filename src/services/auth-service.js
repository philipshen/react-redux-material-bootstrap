import { logout as logoutRedux, setLoggedIn, updateUser } from 'redux/actions/current-user'

/**
 * This service serves as an abstraction layer for authentication
 */
export const fetchLoginStatus = dispatch => async() => {
  return true
}

export const login = dispatch => async() => {
  return Promise.all([
    dispatch(setLoggedIn(true)),
  ])
}

export const logout = dispatch => async() => {
  return dispatch(logoutRedux())
}