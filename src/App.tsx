import React, { FC } from 'react'
import { AppLayout } from './Components/AppLayout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from './Routes'

interface AppProps {

}

export const App: FC<AppProps> = (props) => {

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
