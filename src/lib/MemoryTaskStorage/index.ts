import { InsertOptions, TaskStorage } from "../../services/TaskStorage"

export class MemoryTaskStorage implements TaskStorage {
  private _tasks: Array<{ description: string }>

  constructor() {
    this._tasks = []
  }

  async insert({ task }: InsertOptions) {
    this._tasks.push(task)
  }
}
