//if you need Axis remove the comment (//) and export the module.

const Axis = [{
  key: 'y-axis',
  type: 'axis',
  scale: 'y',
  dock: 'left'
}, {
  key: 'x-axis',
  type: 'axis',
  scale: 'm',
  dock: 'bottom'
},
{
  type: 'grid-line',
  y: 'y'
}]

module.exports = Axis;