// Inspired by https://github.com/near/near-sdk-js/blob/develop/examples/src/counter-lowlevel.js
import { BeeSon } from '@fairdatasociety/beeson'
import { makeChunk } from '@fairdatasociety/bmt-js'
import { FdpStorage } from '@fairdatasociety/fdp-storage'
import { SequentialFeed } from '../swarm-feeds'

/**
 * Defines a block (chunk) stored in the feed.
 */
interface Block {
  state: any
  inclusionProofs: any
  bmt: any
  timestamp: any
}

/** Defines a contract interface */
export interface ContractType {
  fdp: FdpStorage
  feed: typeof SequentialFeed
  topic: string

  serialize: () => Promise<void>
  deserialize: () => Promise<any>

  storageRead: (includeProofs?: boolean) => Promise<{ state: unknown }>
  storageWrite: (state: any) => Promise<void>
}

/** Defines a generic anonymous class constructor */
type Constructor = new (...args: any[]) => {}

/** BaseContractMixin extends a contract with helpers and boilerplate code */
function BaseContractMixin<TBase extends Constructor>(Base: TBase) {
  return class BaseContract extends Base implements ContractType {
    // @ts-ignore
    fdp: FdpStorage
    feed: any

    // @ts-ignore
    topic: string

    /**
     * Reads the last state from the feed.
     * @param includeProofs True if the inclusion proofs should be included in the response.
     * @returns contract state
     */
    async storageRead(includeProofs?: boolean): Promise<{ state: unknown }> {
      const feedR = this.feed.makeFeedR(this.topic, this.fdp.account?.wallet?.address)
      const last = await feedR.findLastUpdate()

      const data = await this.fdp.connection.bee.downloadData(last.reference)
      const block = data.json()

      return {
        state: block.state,
      }
    }

    /**
     * Writes the state to the feed.
     * @param state The state to be written.
     * @returns void
     */
    async storageWrite(state: Uint8Array) {
      const feedRW = this.feed.makeFeedRW(this.topic, this.fdp.account?.wallet)

      const chunk = makeChunk(state)

      const block: Block = {
        state: chunk.payload,
        timestamp: Date.now(),
        inclusionProofs: chunk.inclusionProof,
        bmt: chunk.bmt,
      }

      const reference = await this.fdp.connection.bee.uploadData(
        this.fdp.connection.postageBatchId,
        JSON.stringify(block),
      )

      return feedRW.setLastUpdate(this.fdp.connection.postageBatchId, reference)
    }

    /**
     * Serializes the contract state and writes it to the feed.
     */
    async serialize() {
      const state = new BeeSon({
        json: Object.assign({}, this),
      })

      const data = state.serialize()

      await this.storageWrite(data)
    }

    /** Deserializes the contract state from the feed. */
    async deserialize() {
      const data = await this.storageRead()

      const state = await BeeSon.deserialize(data.state as any)

      if (state) {
        return Object.assign(this, state)
      } else {
        return this
      }
    }
  }
}

/** Defines a contract class decorator */
export function Contract() {
  return <T extends { new (...args: any[]): any }>(target: T) => {
    return class extends target {
      static _create(fdp: FdpStorage, seqFeed: typeof SequentialFeed, topic: string, signer: any) {
        const withMixins = BaseContractMixin(target)
        const instance = new withMixins()

        instance.fdp = fdp
        instance.feed = seqFeed
        instance.signer = signer
        instance.topic = topic

        return instance
      }
    }
  }
}

/** Defines a contract method call decorator */
export function call(options: { gas?: number } = {}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function <AnyFunction extends (...args: any) => any>(
    _target: object,
    _key: string | symbol,
    _descriptor: PropertyDescriptor,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  ) {
    const original = _descriptor.value

    _descriptor.value = function (...args: any[]) {
      const thisArg = Object.bind(this, this._state)
      const result = original.call(thisArg, ...args)

      return result
    }
  }
}

/** Defines a contract method view decorator */
export function view() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function <AnyFunction extends (...args: any) => any>(
    _target: object,
    _key: string | symbol,
    _descriptor: PropertyDescriptor,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  ): void {
    const original = _descriptor.value
    // @ts-ignore
    this.deserialize().then(state => {
      _descriptor.value = function (...args: any[]) {
        // @ts-ignore
        const thisArg = Object.bind(this, state)
        const result = original.call(thisArg, ...args)

        return result
      }
    })
  }
}
