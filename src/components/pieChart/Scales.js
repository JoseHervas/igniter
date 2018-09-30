//if you need Scales remove the comment (//) and export the module.

const Scales = {

		c: {
			data: { 
				extract: { field: 'Product group',
			    props: {
				num: { field: 'Sales ($)' }
			} },padding:10 }, type: 'color'
		}
}

module.exports=Scales