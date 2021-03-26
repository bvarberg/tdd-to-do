import React, { FunctionComponent } from "react"
import { useTasks } from "../../hooks/useTasks"

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
