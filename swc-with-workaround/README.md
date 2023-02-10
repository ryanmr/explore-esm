# swc commonjs with modern syntax

SWC, with the [jest_workaround](https://github.com/magic-akari/jest_workaround) so that jest can tamper with `exports` like usual commonjs code.

This is the `library` module compiled with the `jest_workaround`:

```
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "add", {
    enumerable: true,
    get: function() {
        return add;
    },
    configurable: true
});
function add(a, b) {
    return a + b;
}
```

Meanwhile, this is the original module code, without `jest_workaround`:

```
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "add", {
    enumerable: true,
    get: function() {
        return add;
    }
});
function add(a, b) {
    return a + b;
}
```

Notice that `configurable: true` is the difference.

You could tweak the jest config such that it tweaks the settings of `.swcrc` on demand, for just its usage, and leaves target output untouched and emulated as immutable as esm code would be.

```
 PASS  src/index.test.ts
  index test
    ✓ should return 15 (1 ms)
    ✓ should return 30

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.132 s, estimated 1 s
Ran all test suites.
```

All the tests pass.
