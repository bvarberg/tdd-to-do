import decoratorCentered from "@storybook/addon-centered/react"
import React from "react"
import td from "testdouble"
import {
  Context as ContextTaskStorage,
  TaskStorage,
} from "../../services/TaskStorage"
import { ListTasks } from "."

export default {
  title: "ListTasks",
  decorators: [decoratorCentered],
  component: ListTasks,
}

export const example = () => {
  const mockTaskStorage = td.object<TaskStorage>()
  td.when(mockTaskStorage.fetchCollection()).thenResolve([
    {
      description: "My first task",
    },
    {
      description: "My second task",
    },
  ])

  return (
    <ContextTaskStorage.Provider value={mockTaskStorage}>
      <ListTasks />
    </ContextTaskStorage.Provider>
  )
}
