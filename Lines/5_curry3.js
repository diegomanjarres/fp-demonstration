// Partial Application
const Plot = require('../Plot');

const n = 100;

const aLine = (a, b, x) => a * x + b;
const anotherLine = a => b => x => a * x + b;
const curried = (fn, ...args) => (...nArgs) => fn.apply(this, [...args, ...nArgs]);


const aLineWithSlope2 = curried(aLine, 2);
const aLineWithSlope2IntersectingYAt3 = curried(aLine, 2, 3);
const aLineWithSlopeMinus1IntersectingYAt200 = curried(aLine, -1, 200);
const aLineWithSlopeMinus4IntersectingYAt300 = anotherLine(-4)(300);

Plot.plotLines(
  [
    [...Array(n)].map((_, x) => [x, aLineWithSlope2(5, x)]),
    [...Array(n)].map((_, x) => [x, aLineWithSlope2IntersectingYAt3(x)]),
    [...Array(n)].map((_, x) => [x, aLineWithSlopeMinus1IntersectingYAt200(x)]),
    [...Array(n)].map((_, x) => [x, aLineWithSlopeMinus4IntersectingYAt300(x)]),
  ],
);
