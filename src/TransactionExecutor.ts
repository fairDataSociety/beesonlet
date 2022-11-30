import { FdpStorage } from '@fairdatasociety/fdp-storage'
import { ContractType } from './Contract'
import { SequentialFeed } from './swarm-feeds'

export interface TransactionType {
  to: string
  data: string // eip-712 encoded data
  from: string
}

class TransactionExecutor {
  constructor(fdp: FdpStorage) {}

  async execute(tx: TransactionType) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const seqFeed = new SequentialFeed(this.fdp.connection.bee as any)

    // TODO: Download smart contract
    const sc = await this.fdp.connection.bee.downloadData(tx.to)
    const counter = (sc as ContractType)._create(fdp, seqFeed, topic, signer)
    counter.init()

    // TODO: Execute smart contract, read args from tx.data
    const state = await counter.deserialize()
    counter._setState(state)
    counter.increase()
    await counter.serialize()
  }
}
