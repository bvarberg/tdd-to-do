import {
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"
import td from "testdouble"
import {
  Context as ContextTaskStorage,
  TaskStorage,
} from "../../services/TaskStorage"
import { ActionCreateTask } from "."

describe("ActionCreateTask", () => {
  it("displays a button for creating a new task", () => {
    const { getByTestId } = render(<ActionCreateTask />)

    expect(getByTestId("Button:CreateTask")).toBeInTheDocument()
  })

  describe("when the button for creating a new task is clicked", () => {
    it("reveals a form for entering information about the task", () => {
      const { getByTestId, queryByTestId } = render(<ActionCreateTask />)

      expect(queryByTestId("Form:CreateTask")).not.toBeInTheDocument()
      userEvent.click(getByTestId("Button:CreateTask"))
      expect(queryByTestId("Form:CreateTask")).toBeInTheDocument()
    })

    describe("when the user enters task details and submits the form", () => {
      it("inserts a new task in task storage", async () => {
        const mockTaskStorage = td.object<TaskStorage>()

        const { getByTestId } = render(
          // How do we make the storage object available to the component?
          // Answer: Use a context + provider!
          <ContextTaskStorage.Provider value={mockTaskStorage}>
            <ActionCreateTask />,
          </ContextTaskStorage.Provider>,
        )
        userEvent.click(getByTestId("Button:CreateTask"))
        userEvent.type(getByTestId("Input:TaskDescription"), "My first task")
        fireEvent.submit(getByTestId("Form:CreateTask"))

        // How do we validate that saving had our desired effect without
        // knowing too much about how it gets done?
        // Answer: Mock the collaborator that is responsible, and verify it is
        // called!
        await waitFor(() => {
          td.verify(
            mockTaskStorage.insert({
              task: {
                description: "My first task",
              },
            }),
          )
        })
      })

      it("hides the form", async () => {
        const mockTaskStorage = td.object<TaskStorage>()
        td.when(mockTaskStorage.insert(td.matchers.anything()))

        const { getByTestId } = render(
          <ContextTaskStorage.Provider value={mockTaskStorage}>
            <ActionCreateTask />,
          </ContextTaskStorage.Provider>,
        )
        userEvent.click(getByTestId("Button:CreateTask"))
        userEvent.type(getByTestId("Input:TaskDescription"), "My first task")
        fireEvent.submit(getByTestId("Form:CreateTask"))

        await waitForElementToBeRemoved(() => getByTestId("Form:CreateTask"))
      })
    })
  })
})
