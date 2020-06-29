import decoratorCentered from "@storybook/addon-centered/react"
import React from "react"
// import td from "testdouble"
// import {
//   Context as ContextTaskStorage,
//   TaskStorage,
// } from "../../services/TaskStorage"
import { ActionCreateTask } from "."

export default {
  title: "ActionCreateTask",
  decorators: [decoratorCentered],
  component: ActionCreateTask,
}

// const mockTaskStorage = td.object<TaskStorage>()

export const example = () => {
  return (
    // <ContextTaskStorage.Provider value={mockTaskStorage}>
    <ActionCreateTask />
    // </ContextTaskStorage.Provider>
  )
}
