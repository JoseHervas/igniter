//if you need Scales remove the comment (//) and export the module.

const Scales = {
	y: {
		data: { field: 'Sales ($)' },
		invert: true,
		include: [0]
	},
	c: {
		data: { field: 'Sales ($)' },
		type: 'color'
	},
	t: { data: { extract: { field: 'Product group' } }, padding: 0.3 },
}

module.exports=Scales