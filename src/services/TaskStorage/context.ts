import { createContext } from "react"
import testdouble from "testdouble"
import { TaskStorage } from "./interface"

const mockTaskStorage = testdouble.object<TaskStorage>()

export const Context = createContext<TaskStorage>(mockTaskStorage)
Context.displayName = "ContextTaskStorage"
