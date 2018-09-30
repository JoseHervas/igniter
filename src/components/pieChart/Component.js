
const Component = [{
	key: 'pie',
	type: 'pie',
	data: {
		extract: {
			field: 'Product group',
			props: {
				num: { field: 'Sales ($)' }
			},
		}
	},
	settings: {
        padAngle: 0.01,
        slice: {
          cornerRadius: 4,
          innerRadius: 0.4,
          arc: { ref: 'num' },
          fill: { scale: 'c' },
          strokeWidth: 1,
          stroke: 'rgba(255, 255, 255, 0.5)'
        }
			},
}]
module.exports = Component


