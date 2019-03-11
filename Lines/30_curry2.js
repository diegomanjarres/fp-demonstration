const Plot = require('../Plot');

const n = 100;

const aLine = (a, x, b) => a * x + b;

const curried = (fn, ...args) => (...nArgs) => fn.apply(this, [...args, ...nArgs]);
const aLineWithSlope2 = curried(aLine, 2);

const anotherLine = a => (x, b) => a * x + b;
const anotherLineWithSlope2 = anotherLine(2);

Plot.plotLines(
  [
    [...Array(n)].map((_, x) => [x, aLineWithSlope2(x, 3)]),
    [...Array(n)].map((_, x) => [x, anotherLineWithSlope2(x, 4)]),
  ],
);
