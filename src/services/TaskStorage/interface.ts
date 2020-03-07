interface Task {
  description: string
}

export interface TaskStorage {
  insert(opts: { description: string }): Promise<void>
  findAll(): Promise<Task[]>
}
