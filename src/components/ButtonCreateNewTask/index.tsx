import React from "react"

interface Props {
  onClick: () => void
}

export function ButtonCreateNewTask({ onClick }: Props) {
  const handleClickCreateNewTask = () => onClick()

  return <button onClick={handleClickCreateNewTask}>Create New Task</button>
}
