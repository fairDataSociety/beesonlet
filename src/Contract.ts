// Inspired by https://github.com/near/near-sdk-js/blob/develop/examples/src/counter-lowlevel.js
import * as Block from 'multiformats/block'
import { BeeSon } from '@fairdatasociety/beeson'
import { makeChunk } from '@fairdatasociety/bmt-js'
import { FdpStorage } from '@fairdatasociety/fdp-storage'
import { ethers } from 'ethers'
import { arrayify, hexlify } from 'ethers/lib/utils'
import { SequentialFeed } from './swarm-feeds'
import { codec, hasher } from '@fairdatasociety/beeson-multiformats'
import { BlockDecoder } from 'multiformats/codecs/interface'
import { JsonValue } from '@fairdatasociety/beeson/dist/types'

/**
 * Defines a block (chunk) stored in the feed.
 */
interface Block {
  state: Uint8Array | string
  chunk: any
  timestamp: any
}

/** Defines a contract interface */
export interface ContractType {
  fdp: FdpStorage
  feed: typeof SequentialFeed
  topic: string

  serialize: () => Promise<void>
  deserialize: () => Promise<any>

  getState: () => any

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
    signer: any
    // @ts-ignore
    topic: string

    /**
     * Reads the last state from the feed.
     * @param includeProofs True if the inclusion proofs should be included in the response.
     * @returns contract state
     */
    async storageRead(includeProofs?: boolean): Promise<{ state: Uint8Array }> {
      const feedR = this.feed.makeFeedR(this.topic, this.signer.address)
      const last = await feedR.findLastUpdate()

      const data = await this.fdp.connection.bee.downloadData(last.reference)
      const block = data.json() as any

      return {
        state: arrayify(block.state),
      }
    }

    /**
     * Writes the state to the feed.
     * @param state The state to be written.
     * @returns void
     */
    async storageWrite(state: Uint8Array) {
      const feedRW = this.feed.makeFeedRW(this.topic, this.signer)

      const chunk = makeChunk(state)

      const block: Block = {
        state: hexlify(state),
        chunk: Buffer.from(chunk.address()).toString('hex'),
        timestamp: Date.now(),
      }

      const reference = await this.fdp.connection.bee.uploadData(
        this.fdp.connection.postageBatchId,
        JSON.stringify(block),
      )

      return feedRW.setLastUpdate(this.fdp.connection.postageBatchId, reference.reference)
    }

    /**
     * Serializes the contract state and writes it to the feed.
     */
    async serialize(state = {}) {
      const value = new BeeSon<JsonValue>({
        json: state,
      })
      const block = await Block.encode({ value, codec, hasher })

      await this.storageWrite(block.bytes)
    }

    /** Deserializes the contract state from the feed. */
    async deserialize() {
      const data = await this.storageRead()

      // decode a block
      const state = await Block.decode({
        bytes: data.state as Uint8Array,
        codec: codec as BlockDecoder<252, BeeSon<JsonValue>>,
        hasher,
      })

      const res = await state.value

      return res.json
    }

    // get state
    getState() {
      const { fdp, feed, signer, topic, ...state } = this

      return state
    }

    // set state
    setState(state: object) {
      Object.assign(this, state)
    }
  }
}

/** Defines a contract class decorator */
export function Contract() {
  return <T extends { new (...args: any[]): any }>(target: T) => {
    return class extends target {
      _createInstance(fdp: FdpStorage, seqFeed: typeof SequentialFeed, topic: string, signer: any) {
        const withMixins = BaseContractMixin(target)
        const instance = new withMixins()
        const wallet = new ethers.Wallet(fdp.account.wallet?.privateKey!)
        instance.fdp = fdp
        instance.feed = seqFeed
        // instance.signer = signer
        instance.topic = topic

        instance.signer = {
          sign: wallet.signMessage.bind(wallet),
          address: arrayify(fdp.account.wallet?.address!),
        }

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
      const result = original.bind(this)(...args)

      return { result, isView: false }
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
  ) {
    const original = _descriptor.value

    _descriptor.value = function (...args: any[]) {
      const result = original.bind(this)(...args)

      return { result, isView: true }
    }
  }
}
