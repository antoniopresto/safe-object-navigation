# Safe navigation into objects

```js
const q = require('q_');

const object = {
  a: {
    b: {
      c: {
        d: 1,
        array: ['foo', 'bar'],
      },
    },
  },
};
```

 - ```js q(object, 'a.b.c.d'); // => 1 ```
 - ```js q(object, 'a.b.c.array[1]'); // => bar```
 - ```js q(object, 'foo'); // => undefined```
