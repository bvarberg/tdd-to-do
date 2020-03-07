import { cleanup, fireEvent, render } from "@testing-library/react"
import React, { createContext, useContext, useState } from "react"
import testdouble from "testdouble"

interface TaskStorage {
  insert(opts: { description: string }): Promise<void>
}

const defaultTaskStorage = testdouble.object<TaskStorage>()
const ContextTaskStorage = createContext<TaskStorage>(defaultTaskStorage)

function ActionCreateNewTask() {
  const taskStorage = useContext(ContextTaskStorage)

  const [description, setDescription] = useState<string>("")
  const handleDescriptionChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setDescription(event.target.value)
  }

  const handleClickSave = () => {
    taskStorage.insert({ description })
  }

  return (
    <div>
      <input
        placeholder="Task description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button onClick={handleClickSave}>Save</button>
      <button>Create New Task</button>
    </div>
  )
}

describe("ActionCreateNewTask", () => {
  afterEach(cleanup)

  it("displays a button for creating a new task", () => {
    const { getByText } = render(<ActionCreateNewTask />)

    expect(getByText("Create New Task")).toBeDefined()
  })

  describe("when the button for creating a new task is clicked", () => {
    it.todo("reveals a form for filling out information about the task")
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
