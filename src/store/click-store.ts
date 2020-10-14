// NOT USED YET
// NEED TO LEARN FULL CYCLE USING TS

import { Store } from './main'
import { CLICK_STORE_NAME } from './store-names'

interface Click extends Object {
  count: number
}

class ClickStore extends Store<Click> {
  protected data(): Click {
    return {
      count: 0
    }
  }

  incrementCount() {
    this.state.count++
  }
}

export const clickStore: ClickStore = new ClickStore(CLICK_STORE_NAME)
