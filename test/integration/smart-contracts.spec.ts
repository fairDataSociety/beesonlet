import { BatchId } from '@ethersphere/bee-js'
import { FdpStorage } from '@fairdatasociety/fdp-storage'
import { ethers } from 'ethers'
import { TransactionExecutor } from '../../src/tx/TransactionExecutor'
import { TransactionRequest } from '@ethersproject/abstract-provider'
import { CounterABI } from '../../src/examples/counter-abi'

describe('personal smart contracts', () => {
  let transactionExecutor: TransactionExecutor
  let wallet: ethers.Wallet
  beforeEach(() => {
    const id = `4e4f828e8dbef25edfb9afd997e5c7f5f2186143ad0c878b9b16a2f88cb18042` as BatchId
    const client = new FdpStorage('http://localhost:1633', id)
    wallet = client.account.createWallet()
    client.account.setAccountFromMnemonic(wallet.mnemonic.phrase)
    transactionExecutor = new TransactionExecutor(client)
  })

  it('when created should be defined', async () => {
    expect(transactionExecutor).toBeDefined()
  })

  it('when sending increase() tx, should execute and return 1', async () => {
    const topic = '1600000000000000000000000000000000000000000000000000000000000001'
    const iface = new ethers.utils.Interface(CounterABI)

    const data = iface.encodeFunctionData('increase', [])

    const tx = {
      from: wallet.address,
      to: '0x0000000000000000000000000000000000000000',
      data,
    } as TransactionRequest
    // const raw = ethers.utils.serializeTransaction(tx)
    const raw = await wallet.signTransaction(tx)
    const res = await transactionExecutor.execute(topic, raw)
    expect(res).toBe(1)
  })

  it('when sending 2 increase() txs, should execute and return 2', async () => {
    const topic = '1600000000000000000000000000000000000000000000000000000000000001'
    const iface = new ethers.utils.Interface(CounterABI)

    let data = iface.encodeFunctionData('increase', [])

    let tx = {
      from: wallet.address,
      to: '0x0000000000000000000000000000000000000000',
      data,
    } as TransactionRequest
    // const raw = ethers.utils.serializeTransaction(tx)
    let raw = await wallet.signTransaction(tx)
    let res = await transactionExecutor.execute(topic, raw)
    expect(res).toBe(1)

    data = iface.encodeFunctionData('increase', [])

    tx = {
      from: wallet.address,
      to: '0x0000000000000000000000000000000000000000',
      data,
    } as TransactionRequest
    // const raw = ethers.utils.serializeTransaction(tx)
    raw = await wallet.signTransaction(tx)
    res = await transactionExecutor.execute(topic, raw)
    expect(res).toBe(2)
  })

  it('when sending 2 increase() and 1 decrease() txs, should execute and return 2', async () => {
    const topic = '1600000000000000000000000000000000000000000000000000000000000001'
    const iface = new ethers.utils.Interface(CounterABI)

    let data = iface.encodeFunctionData('increase', [])

    let tx = {
      from: wallet.address,
      to: '0x0000000000000000000000000000000000000000',
      data,
    } as TransactionRequest
    // const raw = ethers.utils.serializeTransaction(tx)
    let raw = await wallet.signTransaction(tx)
    let res = await transactionExecutor.execute(topic, raw)
    expect(res).toBe(1)

    data = iface.encodeFunctionData('increase', [])

    tx = {
      from: wallet.address,
      to: '0x0000000000000000000000000000000000000000',
      data,
    } as TransactionRequest
    // const raw = ethers.utils.serializeTransaction(tx)
    raw = await wallet.signTransaction(tx)
    res = await transactionExecutor.execute(topic, raw)
    expect(res).toBe(2)

    data = iface.encodeFunctionData('decrease', [])

    tx = {
      from: wallet.address,
      to: '0x0000000000000000000000000000000000000000',
      data,
    } as TransactionRequest
    // const raw = ethers.utils.serializeTransaction(tx)
    raw = await wallet.signTransaction(tx)
    res = await transactionExecutor.execute(topic, raw)
    expect(res).toBe(1)
  })
})
