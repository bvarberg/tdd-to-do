import React, { FunctionComponent, MouseEventHandler } from "react"
import { useForm } from "react-hook-form"
import { useCreateTask } from "../../hooks/useCreateTask"
import { useOpenCloseable } from "../../hooks/useOpenCloseable"

type FormData = {
  description: string
}

export const ActionCreateTask: FunctionComponent = () => {
  const { isOpen, open, close } = useOpenCloseable()
  const { register, handleSubmit } = useForm<FormData>()
  const [createTask] = useCreateTask()

  const handleClickCreateTask: MouseEventHandler = () => {
    open()
  }

  const handleSaveTask = handleSubmit(({ description }) => {
    createTask({ task: { description } }, { throwOnError: false })
    close()
  })

  return (
    <div>
      {isOpen && (
        <form data-testid="Form:CreateTask" onSubmit={handleSaveTask}>
          <input
            type="text"
            name="description"
            placeholder="Test all my components..."
            ref={register}
            data-testid="Input:TaskDescription"
          />
          <button type="submit" data-testid="Button:SaveTask">
            Save
          </button>
        </form>
      )}
      <button onClick={handleClickCreateTask} data-testid="Button:CreateTask">
        Create New Task
      </button>
    </div>
  )
}
