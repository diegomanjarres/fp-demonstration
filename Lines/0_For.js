const Plot = require('../Plot');

const n = 100;
const aLine = (a, x, b) => a * x + b;

const data = [];
for (let i = 0; i < n; i++) {
  data.push([i, aLine(2, i, 3)]);
}

Plot.plotLine(data);
