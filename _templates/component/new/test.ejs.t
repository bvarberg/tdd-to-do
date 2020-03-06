---
to: "<%= includeTests ? `src/components/${name}/test.tsx` : null %>"
---
import { render, fireEvent } from "@testing-library/react"
import React from "react"
import { <%= name %> } from "."

describe("<%= name %>", () => {
  it.todo("...")
})