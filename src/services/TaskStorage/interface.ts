export interface TaskStorage {
  insert(opts: { description: string }): Promise<void>
}
