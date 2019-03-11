const Plot = module.exports;

const plotly = require('plotly')('diego.manjarres', process.env.PLOTLY_KEY);

const LINE = 'line';

// const data = [{ x: [0, 1, 2], y: [3, 2, 1], type: 'line' }];
const layout = { fileopt: 'overwrite', filename: 'simple-node-example' };
const parseLineData = data => data
  .reduce((accum, [x, y]) => ({
    ...accum,
    x: [...accum.x, x],
    y: [...accum.y, y],
  }),
  { x: [], y: [], type: LINE });

Plot.plotLine = (data) => {
  plotly.plot(
    [parseLineData(data)],
    layout, console.log,
  );
};

Plot.plotLines = (data) => {
  plotly.plot(
    data.map(parseLineData),
    layout, console.log,
  );
};
