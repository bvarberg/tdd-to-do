import { render } from "@testing-library/react"
import React from "react"
import td from "testdouble"
import {
  Context as ContextTaskStorage,
  TaskStorage,
} from "../../services/TaskStorage"
import { ListTasks } from "."

describe("ListTasks", () => {
  it("displays a list item for each task", async () => {
    const mockTaskStorage = td.object<TaskStorage>()
    td.when(mockTaskStorage.fetchCollection()).thenResolve([
      {
        description: "My first task",
      },
      {
        description: "My second task",
      },
    ])

    const { findAllByTestId } = render(
      <ContextTaskStorage.Provider value={mockTaskStorage}>
        <ListTasks />
      </ContextTaskStorage.Provider>,
    )
    const listItemTasks = await findAllByTestId("ListItemTask")

    expect(listItemTasks).toHaveLength(2)
  })

  describe("when there are no tasks", () => {
    it("displays a prompt to create a task", async () => {
      const mockTaskStorage = td.object<TaskStorage>()
      td.when(mockTaskStorage.fetchCollection()).thenResolve([])

      const { findByTestId } = render(
        <ContextTaskStorage.Provider value={mockTaskStorage}>
          <ListTasks />
        </ContextTaskStorage.Provider>,
      )
      const createTaskPrompt = await findByTestId("Text:CreateTaskPrompt")

      expect(createTaskPrompt).toBeVisible()
    })
  })
})
