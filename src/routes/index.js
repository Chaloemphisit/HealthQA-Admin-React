import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home, Page404 } from '../containers'

export default () => (
  <Switch >
    <Route exact={true} path="/" component={Home} />
    <Route component={Page404} />
  </Switch>
)