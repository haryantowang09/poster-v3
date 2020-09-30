import { reactive, readonly } from 'vue'
import { set, get } from 'idb-keyval'

export abstract class Store<T extends Object> {
  protected state: T

  constructor(readonly storeName: string) {
    let data = this.data()
    this.setup(data)
    this.state = reactive(data) as T
  }

  protected abstract data(): T
  protected setup(data: T): void {}

  public getState(): T {
    return readonly(this.state) as T
  }
}