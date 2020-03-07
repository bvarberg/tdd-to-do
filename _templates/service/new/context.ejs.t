---
to: src/services/<%= name %>/context.ts
---
import { createContext } from "react"
import testdouble from "testdouble"
import { <%= name %> } from "./interface"

const mock<%= name %> = testdouble.object<<%= name %>>()

export const Context = createContext<<%= name %>>(mock<%= name %>)
Context.displayName = "Context<%= name %>"
