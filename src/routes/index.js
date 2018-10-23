import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Dashboard, Page404 } from '../containers'

export default () => (
  <Switch >
    <Route exact={true} path="/" component={Dashboard} />
    <Route component={Page404} />
  </Switch>
)