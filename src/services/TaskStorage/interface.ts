export type TaskStorage = {
  insert(opts: InsertOptions): Promise<void>
  fetchCollection(): Promise<Task[]>
}

export type Task = {
  description: string
}

export type InsertOptions = {
  task: Task
}
