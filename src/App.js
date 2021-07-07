import React, { Component } from 'react'
import {BrowserRouter as R,Switch,Route  } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <>
        <R>
          <Switch>
        <Route path="/" >Home</Route>
        <Route path="" > </Route>
        <Route path="" > </Route>
        </Switch>
        </R>
      </>
    )
  }
}
