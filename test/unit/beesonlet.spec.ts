import { BatchId } from '@ethersphere/bee-js'
import { BeeSon, Type } from '@fairdatasociety/beeson'
import { createSignedRunnable } from '../../src/index'

describe('beesonlet', () => {
  beforeEach(() => {
    // ...
  })

  it('should return array', async () => {
    const src = `
    const [json] = arguments

    return json
    `

    // Create beesonlet with source code and dependencies
    const res = await createSignedRunnable(src)

    const input = [1, 2, 3]
    const output = await res.run(input)
    expect(input).toEqual(output)
  })

  it('should create block', async () => {
    const src = `
    const [json] = arguments;
    const beeson = new BeeSon({ json });

    return beeson;
    `

    // Create beesonlet with source code and dependencies
    const res = await createSignedRunnable(src, {
      BeeSon,
    })

    const input = [0, 1, 2, 3, 4, 5, 6]
    const output = await res.run(input) // returns Uint8Array
    expect(input).toEqual(output) // returns serialize source code as Uint8Array
  })

  xit('should create block', async () => {
    const src = `
    const json = [0, 1, 2, 3, 5, 6]
    const beeson = new BeeSon({ json })

    return beeson.serialize()
    `

    // Create beesonlet with source code and dependencies
    const res = await createSignedRunnable(src, {
      BeeSon,
    })

    const output = await res.run() // returns Uint8Array
    expect(await res.getCode()).toEqual(await output) // returns serialize source code as Uint8Array
  })
})
