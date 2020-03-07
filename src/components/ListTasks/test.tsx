import { cleanup, render } from "@testing-library/react"
import React from "react"
import testdouble from "testdouble"
import {
  Context as ContextTaskStorage,
  TaskStorage,
} from "../../services/TaskStorage"
import { ListTasks } from "."

describe("ListTasks", () => {
  afterEach(cleanup)

  it("displays a list item for each task", async () => {
    const taskStorage = testdouble.object<TaskStorage>()
    testdouble
      .when(taskStorage.findAll())
      .thenResolve([
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
