import React from "react"
import {
  Context as ContextTaskStorage,
  TaskStorage,
} from "../../services/TaskStorage"
import { ActionCreateNewTask } from "../ActionCreateNewTask"

interface Props {
  taskStorage: TaskStorage
}

export function App({ taskStorage }: Props) {
  return (
    <ContextTaskStorage.Provider value={taskStorage}>
      <ActionCreateNewTask />
    </ContextTaskStorage.Provider>
  )
}
