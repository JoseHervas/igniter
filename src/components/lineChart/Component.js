
const Component = [{
	key: 'lines',
	type: 'line',
	data: {
		extract: {
			field:'Product group',
			props: {
				v: { field: 'Sales ($)' }
			}
		}
	},
	settings: {
		coordinates: {
			major: { scale: 't' },
			minor: { scale: 'y', ref: 'v' }
		},
		layers: {
			line: {}
		}
	}
}]
module.exports = Component


