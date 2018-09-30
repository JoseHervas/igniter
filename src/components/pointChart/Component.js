const Component = [{
	key: 'p',
	type: 'point',

	data: {
		extract: {
			field: 'Product group',
			props: {
				size: { field: 'Sales ($)' },
				x: { field: 'Sales ($)' },
				group: { field: 'Product group' }
			}
		}
	},
	settings: {
		x: { scale: 'm' },
		y: { scale: 'y', ref: 'group' },
		shape: 'circle',
		size: { scale: 's' },
		strokeWidth: 2,
		stroke: '#fff',
		opacity: 0.8,
		fill: { scale: 'col', ref: 'group' }
	}
}]
module.exports = Component


