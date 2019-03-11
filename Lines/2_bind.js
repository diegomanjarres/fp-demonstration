const Plot = require('../Plot');

const n = 100;
const aLine = (a, x, b) => a * x + b;

const aLineWithSlope2 = aLine.bind(null, 3);

Plot.plotLine(
  [...Array(n)].map((_, x) => [x, aLineWithSlope2(x, 3)]),
);
