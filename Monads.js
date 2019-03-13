const _ = require('lodash');

const b = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[
  [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[9]]]]]]]]]]]]]]]]]]]]]]]]]]],
  ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],
]]]]]]]]]]]]];
const c = _.flatMap(b, x => x * 2);
console.log(c);


const d = Promise.resolve(Promise.resolve(Promise.resolve(Promise.resolve(Promise.resolve(10)))));
d.then(console.log);
