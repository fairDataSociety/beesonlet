import { FdpStorage } from '@fairdatasociety/fdp-storage'
import { BytesLike, ethers } from 'ethers'
import { Counter } from '../examples/counter'
import { CounterABI } from '../examples/counter-abi'
import { SequentialFeed } from '../swarm-feeds'

// PoC: Execute transaction and calls
export class TransactionExecutor {
  seqFeed: typeof SequentialFeed
  constructor(public fdp: FdpStorage) {
    this.seqFeed = new SequentialFeed(this.fdp.connection.bee as any)
  }

  async execute(topic: string, raw: BytesLike) {
    // Parse transaction
    const tx = ethers.utils.parseTransaction(raw)
    // TODO: Find how to fetch ABI
    const iface = new ethers.utils.Interface(CounterABI)
    const txMetadata = iface.parseTransaction(tx)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    // TODO: Fetch smart contract
    // TODO: Use IoC
    // const sc = await this.fdp.connection.bee.downloadData(tx.to)
    const T = new Counter()

    // @ts-ignore
    const instance = T._createInstance(this.fdp, this.seqFeed, topic, this.fdp.account?.wallet)

    // Get function fragment
    const fn = iface.getFunction(txMetadata.sighash)

    // First read from storage
    let state = instance.getState()

    try {
      state = await instance.deserialize()
      console.log(`Deserialize state: ${JSON.stringify(state)}`)
    } catch (e) {
      console.log(`Initial state: ${JSON.stringify(state)}`)
    }
    // Set state to instance
    instance.setState(state)

    //  Execute transaction or call
    const { result, isView } = await instance[fn.name](...txMetadata.args)

    // Get state after tx
    state = instance.getState()
    console.log(`State after tx: ${JSON.stringify(state)}`)

    // If transaction, commit transaction
    if (!isView) {
      await instance.serialize(state)
      console.log(`Serialize state: ${JSON.stringify(state)}`)
    } else {
      console.log(`Read only / view`)
    }
    // TODO: Send response
    console.log(`Result: ${JSON.stringify(result)}`)

    return result
  }
}
