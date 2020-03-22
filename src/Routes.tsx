import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { getStore } from './Store'
import { HomePage } from './modules/home-views/HomePage'


export default class Routes extends Component {
  store = getStore()
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    )
  }
}

