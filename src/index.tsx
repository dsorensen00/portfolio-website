import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { Router } from "react-router-dom"
import { createBrowserHistory } from "history"
import { syncHistoryWithStore } from "mobx-react-router"
import { createStore } from "./Store"
import { createClient } from "./AxiosFactory"
import * as serviceWorker from "./serviceWorker"

const client = createClient()
const rootStore = createStore(client)
const routerHistory = createBrowserHistory()
const history = syncHistoryWithStore(routerHistory, rootStore.routing)

ReactDOM.render(
  <Router history={history}>
      <App />
  </Router>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
