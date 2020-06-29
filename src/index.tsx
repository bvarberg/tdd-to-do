import React from "react"
import ReactDOM from "react-dom"
import { App } from "./components/App"
import { MemoryTaskStorage } from "./lib/MemoryTaskStorage"
import * as serviceWorker from "./serviceWorker"

const taskStorage = new MemoryTaskStorage()

ReactDOM.render(
  <App taskStorage={taskStorage} />,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
