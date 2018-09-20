//if you need Scales remove the comment (//) and export the module.

const Scales = {
	y: {
		data: { field: 'Sales ($)' },
		invert: true,
		expand: 0.2
	},
	t: { data: { extract: { field: 'Product group' } } }
}

module.exports=Scales