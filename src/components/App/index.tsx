import React, { FunctionComponent } from "react"
import {
  Context as ContextTaskStorage,
  TaskStorage,
} from "../../services/TaskStorage"
import { ActionCreateTask } from "../ActionCreateTask"

type Dependencies = {
  taskStorage: TaskStorage
}

export const App: FunctionComponent<Dependencies> = ({ taskStorage }) => {
  return (
    <ContextTaskStorage.Provider value={taskStorage}>
      <div className="App">
        <ActionCreateTask />
      </div>
    </ContextTaskStorage.Provider>
  )
}
