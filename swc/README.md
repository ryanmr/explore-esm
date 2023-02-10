# swc commonjs with modern syntax

SWC will not convert modern "es6" code with `import` `export` into commonjs code with `require`, such that it can be spied and mocked with jest.

```
$ jest
 FAIL  dist/index.test.js
  ● index test › should return 30

    TypeError: Cannot redefine property: add
        at Function.defineProperty (<anonymous>)

      50 |     });
      51 |     it("should return 30", function() {
    > 52 |         var spy = jest.spyOn(_library, "add").mockImplementation(function() {
         |                        ^
      53 |             return 30;
      54 |         });
      55 |         var value = (0, _.main)();

      at ModuleMocker.spyOn (node_modules/jest-mock/build/index.js:761:16)
      at Object.spyOn (dist/index.test.js:52:24)
```

The output looks like this:

```js
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

There is [a workaround](https://www.npmjs.com/package/jest_workaround) but it is not a mainline workaround.
