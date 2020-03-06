import { cleanup, fireEvent, render } from "@testing-library/react"
import React from "react"
import { ActionCreateNewTask } from "."

describe("ActionCreateNewTask", () => {
  afterEach(cleanup)

  it("clicking 'Create New Task' reveals a form for creating a task", () => {
    const { getByText, getByPlaceholderText } = render(<ActionCreateNewTask />)
    fireEvent.click(getByText("Create New Task"))
    const input = getByPlaceholderText("Task description")

    expect(input).toBeDefined()
  })

  describe("when the user types a task description and submits the form", () => {
    it.todo("stores the task")
  })
})
