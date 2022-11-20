# Beesonlet - Beeson applet

Run verifiable JavaScript apps in the edge using QuickJS/Wasm

## Install

`npm install @fairdatasociety/beesonlet`

## Usage

```typescript
import { BeeSon, Type } from '@fairdatasociety/beeson';
import { createSignedApplet } from '@fairdatasociety/beesonlet';


const src =

`const json = [0, 1, 2, 3, 5, 6]
const beeson = new BeeSon({ json })
return beeson.serialize()
`;

// Create beesonlet with source code and dependencies
const res = await createSignedApplet(src, {
    BeeSon
});


const fn = res.fn;
fn(); // returns Uint8Array
console.log(res.reference); // returns swarm reference
console.log(res.bytecode); // returns serialize source code as Uint8Array

```

## Maintainers

- [molekilla](https://github.com/molekilla)

## License

[MIT](./LICENSE)
