import React, { FunctionComponent } from 'react'
import { AppLayout } from './Components/AppLayout'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Routes } from './Routes'

export const App: FunctionComponent<{}> = (props) => {

  return (
    <AppLayout title="$TEK token presale portal">
      <Router>
        <Switch>
          {Routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.component />}
            />
          ))}
        </Switch>
      </Router>
    </AppLayout>
  )
}
