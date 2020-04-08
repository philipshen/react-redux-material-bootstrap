import React, { useState } from 'react'
import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import AppBar from 'components/app-bar'
import AuthRoute from 'components/authenticated-route'
import Breadcrumbs from 'components/breadcrumbs'
import GlobalFlash from 'components/global-flash'
import SplashScreen from 'components/pages/splash-screen'

import Home from 'components/pages/home'

import { fetchLoginStatus } from 'services/auth-service'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#FF7890' },
  },
})

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchLoginStatus: fetchLoginStatus(dispatch),
  },
})

function App(props) {
  const { actions } = props
  const [loginStatusFetched, setLoginStatusFetched] = useState(false)

  if (!loginStatusFetched) {
    actions.fetchLoginStatus().then(() => setLoginStatusFetched(true))
    return <SplashScreen />
  } else {
    return (
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <Router>
          <Switch>
            <Route component={ Home }
              exact
              path='/' />
          </Switch>
        </Router>
      </ThemeProvider>
    )
  }
}

export default connect(null, mapDispatchToProps)(App)
