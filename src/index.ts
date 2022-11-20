import { makeChunkedFile, ChunkAddress } from '@fairdatasociety/bmt-js'
import { BeeSon } from '@fairdatasociety/beeson'
import { JsonValue } from '@fairdatasociety/beeson/dist/types'
import def from 'define-function'

/**
 * Get Swarm Reference from Beeson
 * @param beeson beeson value
 * @returns A Swarm Reference (chunk address)
 */
export async function getSwarmRefFromBeeson(beeson: BeeSon<JsonValue>): Promise<ChunkAddress> {
  const value = beeson.serialize()
  const chunk = makeChunkedFile(value)

  return chunk.address()
}

/**
 * Creates a signed beeson applet, verifiable by swarm reference
 * @param src javascript source code
 * @returns Function eval as promise
 */
export async function createSignedApplet(src: string, global: object = {}): Promise<any> {
  const beeson = new BeeSon<JsonValue>({ json: src })
  const ref = await getSwarmRefFromBeeson(beeson)

  const ctx = await def.context({ global })

  return { fn: await ctx.def(src), reference: ref, bytecode: beeson.serialize() }
}
