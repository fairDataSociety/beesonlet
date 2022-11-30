import { Contract, view, call } from './Contract'

@Contract()
export class Counter {
  count = 0

  init() {
    this.count = 0
  }

  @call() increase() {
    this.count += 1
  }

  @call() decrease() {
    this.count -= 1
  }

  @view() getCount() {
    return this.count
  }
}
