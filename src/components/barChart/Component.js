const Component = [{
	key: 'bars',
	type: 'box',
	data: {
		extract: {
			field: 'Product group',
			props: {
				start: 0,
				end: { field: 'Sales ($)' }
			}
		}
	},
	settings: {
		major: { scale: 't' },
		minor: { scale: 'y' },
		box: {
			fill: { scale: 'c', ref: 'end' }
		}
	}
}]
module.exports = Component


