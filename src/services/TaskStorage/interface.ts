export type TaskStorage = {
  insert(opts: InsertOptions): Promise<void>
}

export type InsertOptions = {
  task: {
    description: string
  }
}
