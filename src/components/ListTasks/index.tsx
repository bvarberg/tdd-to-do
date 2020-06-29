import React, { FunctionComponent, useContext } from "react"
import { useQuery } from "react-query"
import { Context as ContextTaskStorage } from "../../services/TaskStorage"

const useTasks = () => {
  const taskStorage = useContext(ContextTaskStorage)

  const fetchTasks = () => taskStorage.fetchCollection()

  return useQuery({
    queryKey: "tasks",
    queryFn: fetchTasks,
  })
}

export const ListTasks: FunctionComponent = () => {
  const { data: tasks } = useTasks()

  if (!tasks) {
    return null
  }

  return (
    <div>
      {tasks.length < 1 && (
        <p data-testid="Text:CreateTaskPrompt">
          Create a task with the button below.
        </p>
      )}
      <ul>
        {tasks.map(task => (
          <li key={task.description} data-testid="ListItemTask">
            {task.description}
          </li>
        ))}
      </ul>
    </div>
  )
}
