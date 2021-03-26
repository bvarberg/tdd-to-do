import { useContext } from "react"
import { useQuery } from "react-query"
import { Context as ContextTaskStorage } from "../../services/TaskStorage"

export const useTasks = () => {
  const taskStorage = useContext(ContextTaskStorage)

  const fetchTasks = () => taskStorage.fetchCollection()

  return useQuery({
    queryKey: "tasks",
    queryFn: fetchTasks,
  })
}
