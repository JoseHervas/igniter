//if you need Scales remove the comment (//) and export the module.

const Scales = {
	y: {
	  data: {
		extract: { field: 'Product group' }
	  }
	},
	m: {
	  data: {
		field: 'Sales ($)'
	  },
	  expand: 0.1
	},
	s: {
	  data: {
		field: 'Sales ($)'
	  }
	},
	col: {
	  data: { extract: { field: 'Product group' } },
	  type: 'color'
	}
  }
module.exports=Scales