import React, { useContext, useEffect, useState } from "react"
import { Context as ContextTaskStorage } from "../../services/TaskStorage"

interface Task {
  description: string
}

export function ListTasks() {
  const taskStorage = useContext(ContextTaskStorage)

  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const findAllTasks = async () => {
      const allTasks = await taskStorage.findAll()
      setTasks(allTasks)
    }

    findAllTasks()
  }, [taskStorage])

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} data-testid="task">
          {task.description}
        </li>
      ))}
    </ul>
  )
}
