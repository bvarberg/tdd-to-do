import React, { useContext, useState } from "react"
import { Context as ContextTaskStorage } from "../../services/TaskStorage"

export function ActionCreateNewTask() {
  const taskStorage = useContext(ContextTaskStorage)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [description, setDescription] = useState<string>("")

  const handleClickCreateNewTask = () => setIsOpen(!isOpen)

  const handleDescriptionChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setDescription(event.target.value)
  }

  const handleClickSave = () => {
    taskStorage.insert({ description })
  }

  return (
    <div>
      {isOpen && (
        <div>
          <input
            placeholder="Task description"
            value={description}
            onChange={handleDescriptionChange}
          />
          <button onClick={handleClickSave}>Save</button>
        </div>
      )}
      <button onClick={handleClickCreateNewTask}>Create New Task</button>
    </div>
  )
}
