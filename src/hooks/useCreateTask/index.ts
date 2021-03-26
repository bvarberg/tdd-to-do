import { useContext } from "react"
import { queryCache, useMutation } from "react-query"
import { Context as ContextTaskStorage } from "../../services/TaskStorage"

type CreateTaskParams = {
  task: {
    description: string
  }
}

export const useCreateTask = () => {
  const taskStorage = useContext(ContextTaskStorage)

  const createTask = (params: CreateTaskParams) => taskStorage.insert(params)

  return useMutation(createTask, {
    onSuccess: () => {
      queryCache.invalidateQueries("tasks")
    },
  })
}
