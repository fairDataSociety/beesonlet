# FDP Personal Smart Contracts API Architecture

> Note: Experimental, not ready for production

Run verifiable JavaScript smart contracts in the edge using QuickJS/Wasm

## Introduction

This project is a prototype of how we can create smart contracts and execute them in userspace, that is, in the edge (Browser, Mobile, etc) and maintain verifiable and privacy features supported by Swarm.

## Architecture

- **JSON-RPC at the edge**: Where Web3 apps or extensions send transactions to the edge smart contract server.
- **Transaction Executor**: `EIP-712` aware transactions are default and API supports `EIP-5559 Cross Chain Write Deferral Protocol` and `EIP-3668 CCIP Read: Secure offchain data retrieval`
- **FDP Personal Smart Contract**: Compiled to QuickJS/WASM, it executes and stores states in a Swarm Sequential Feed, as BMT Chunks with data serialization using BeeSon.
- **Verifiable**: BMT verifiable inclusions proofs
- **Privacy**: FDP provides encrypted data at rest

##  Use cases

- Data unions
- L1 and L2 data integrations
- Oracles
- Data Privacy

## Sample

```javascript
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
```

## Ideas and inspiration

- Near JavaScript Smart contracts SDK

## Maintainers

- [molekilla](https://github.com/molekilla)

## License

[MIT](./LICENSE)
