# swc commonjs with vitest

I like SWC, and I think vitest might be a suitable alternative to jest (speed, esm interop, etc).

**Note**: this variant has a slightly expanded test suite and code example to try additional pieces out.

The danger in this variant is that swc and vitest (its powered by `vite`, so does it use esbuild or does it use swc) could perform their compilations differently enough to cause mysterious edge cases.

```
➜  swc-with-vitest git:(main) ✗ yarn why esbuild
yarn why v1.22.19
[1/4] 🤔  Why do we have the module "esbuild"...?
[2/4] 🚚  Initialising dependency graph...
[3/4] 🔍  Finding dependency...
[4/4] 🚡  Calculating file sizes...
=> Found "esbuild@0.16.17"
info Reasons this module exists
   - "vitest#vite" depends on it
   - Hoisted from "vitest#vite#esbuild"
info Disk size without dependencies: "148KB"
info Disk size with unique dependencies: "148KB"
info Disk size with transitive dependencies: "148KB"
info Number of shared dependencies: 0
✨  Done in 0.11s.
```

This `yarn why` traces the `esbuild` dependency back to `vitest` and vite, so there's a lot of toolchaining going on for this.

The generated JavaScript for this various would look the same as the plain `swc`, but there's not such a good way to see what vitest is doing under the hood during its compilation.
