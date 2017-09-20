# Safe navigation into objects

npm install --save q_

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

 - ``` q(object, 'a.b.c.d'); // => 1 ```
 - ``` q(object, 'a.b.c.array[1]'); // => bar```
 - ``` q(object, 'foo'); // => undefined```
