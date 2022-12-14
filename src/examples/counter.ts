import { Contract, view, call } from '../Contract'

@Contract()
export class Counter {
  public count = 0

  @call() increase() {
    this.count += 1

    return this.count
  }

  @call() decrease() {
    this.count -= 1

    return this.count
  }

  @view() getCount() {
    return this.count
  }
}
