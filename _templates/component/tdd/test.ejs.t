---
to: "src/components/<%= name %>/test.tsx"
---
import { fireEvent, render } from "@testing-library/react"
import React from "react"
import testdouble from "testdouble"

describe("<%= name.split("/").pop() %>", () => {
  it.todo("...")
})
