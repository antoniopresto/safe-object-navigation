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

q(object, 'a.b.c.d'); // => 1
q(object, 'a.b.c.array[1]'); // => bar
