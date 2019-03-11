const Plot = require('../Plot');

const n = 100;
const aLine = (a, x, b) => a * x + b;

Plot.plotLine(
  [...Array(n)].map((_, x) => [x, aLine(2, x, 3)]),
);
