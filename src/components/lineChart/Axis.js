//if you need Axis remove the comment (//) and export the module.

const Axis = [{
  type: 'axis',
  dock: 'left',
  scale: 'y',
  formatter: {
    type: 'd3-number',
    format: '$,.1r'
  },
},{
  type: 'axis',
  dock: 'bottom',
  scale: 't',
  formatter: {
    type: 'd3-time',
    format: '%Y-%m'
  }
}]

module.exports = Axis;