import { cleanup, render } from "@testing-library/react"
import React, { useContext, useEffect, useState } from "react"
import testdouble from "testdouble"
import {
  Context as ContextTaskStorage,
  TaskStorage,
} from "../../services/TaskStorage"

interface Task {
  description: string
}

function ListTasks() {
  const taskStorage = useContext(ContextTaskStorage)

  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const findAllTasks = async () => {
      const allTasks = await taskStorage.findAll()
      setTasks(allTasks)
    }

    findAllTasks()
  }, [taskStorage])

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} data-testid="task">
          {task.description}
        </li>
      ))}
    </ul>
  )
}

describe("ListTasks", () => {
  afterEach(cleanup)

  it("displays a list item for each task", async () => {
    const taskStorage = testdouble.object<TaskStorage>()
    testdouble
      .when(taskStorage.findAll())
      .thenResolve<Task[]>([
        { description: "My first task" },
        { description: "My second task" },
      ])

    const { findAllByTestId } = render(
      <ContextTaskStorage.Provider value={taskStorage}>
        <ListTasks />
      </ContextTaskStorage.Provider>,
    )

    expect(await findAllByTestId("task")).toHaveLength(2)
  })
})
