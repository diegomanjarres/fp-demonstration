const Plot = require('../Plot');

const n = 100;

const anotherLine = a => b => x => a * x + b;
const anotherLineWithSlope2IntersectingYAt3 = anotherLine(2)(3);

Plot.plotLine(
  [...Array(n)].map((_, x) => [x, anotherLineWithSlope2IntersectingYAt3(x)]),
);
