import { fireEvent, render } from "@testing-library/react"
import React from "react"
import testdouble from "testdouble"
import { ButtonCreateNewTask } from "."

describe("ButtonCreateNewTask", () => {
  it("calls the provided click event handler when clicked", () => {
    const mockOnClick = testdouble.function()

    const { getByText } = render(<ButtonCreateNewTask />)
    fireEvent.click(getByText("Create New Task"))

    testdouble.verify(mockOnClick())
  })
})
