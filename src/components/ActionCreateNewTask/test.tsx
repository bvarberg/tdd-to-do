import { cleanup, fireEvent, render } from "@testing-library/react"
import React from "react"
import testdouble from "testdouble"
import {
  Context as ContextTaskStorage,
  TaskStorage,
} from "../../services/TaskStorage"
import { ActionCreateNewTask } from "."

describe("ActionCreateNewTask", () => {
  afterEach(cleanup)

  it("displays a button for creating a new task", () => {
    const { getByText } = render(<ActionCreateNewTask />)

    expect(getByText("Create New Task")).toBeDefined()
  })

  describe("when the button for creating a new task is clicked", () => {
    it("reveals a form for filling out information about the task", () => {
      const { container, getByText, queryByPlaceholderText } = render(
        <ActionCreateNewTask />,
      )

      expect(container).not.toContainElement(
        queryByPlaceholderText("Task description"),
      )
      fireEvent.click(getByText("Create New Task"))
      expect(container).toContainElement(
        queryByPlaceholderText("Task description"),
      )
    })
  })

  describe("when the user enters task details and clicks save", () => {
    it("inserts a new task in task storage", () => {
      const taskStorage = testdouble.object<TaskStorage>()

      const { getByText, getByPlaceholderText } = render(
        <ContextTaskStorage.Provider value={taskStorage}>
          <ActionCreateNewTask />,
        </ContextTaskStorage.Provider>,
      )
      fireEvent.click(getByText("Create New Task"))
      fireEvent.change(getByPlaceholderText("Task description"), {
        target: {
          value: "My first task",
        },
      })
      fireEvent.click(getByText("Save"))

      testdouble.verify(taskStorage.insert({ description: "My first task" }))
    })
  })
})
