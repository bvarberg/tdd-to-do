import React from "react"

interface Props {
  onClick: () => void
}

export function ButtonCreateNewTask({ onClick }: Props) {
  return <button>Create New Task</button>
}
