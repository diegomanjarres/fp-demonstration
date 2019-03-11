const Plot = require('../Plot');

const n = 100;

const anotherLine = a => (x, b) => a * x + b;
const anotherLineWithSlope2 = anotherLine(2);

Plot.plotLine(
  [...Array(n)].map((_, x) => [x, anotherLineWithSlope2(x, 3)]),
);
