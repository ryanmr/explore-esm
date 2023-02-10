# exploring esm with modern compiler-y-thingies

Here we have:

* esbuild + vitest (esm)
* swc with jest (commonjs)
* swc with jest + jest workaround (commonjs)

## why

ESM is the future, probably. Jest is taking its time with ESM support. CommonJS work. With SWC for example, there are some limitations induced by using the modern `export` syntax while using ESM - the modules' immutability is enforced. That means `mocks` and `spies` stop working the way they used to.

This explores various tooling stacks and configurations.

## why why

I just want to test things while using modern syntax in a familiar way.
