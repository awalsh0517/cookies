import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CookiesPage from './pages/Cookies'
import ErrorPage from './pages/Error'
import AboutId from './pages/AboutId'

render(
  <BrowserRouter>
    <Switch>
      <Route path="/cookies" component={AboutId} />
      <Route exact path="/" component={CookiesPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
