import { TaskStorage } from "../../services/TaskStorage"

export class MemoryTaskStorage implements TaskStorage {
  private _tasks: Array<{ description: string }>

  constructor() {
    this._tasks = []
  }

  async insert({ description }: { description: string }) {
    this._tasks.push({ description })
  }
}
