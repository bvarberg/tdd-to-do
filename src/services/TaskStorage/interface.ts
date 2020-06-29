export interface TaskStorage {
  insert(opts: InsertOptions): Promise<void>
}

type InsertOptions = {
  task: {
    description: string
  }
}
