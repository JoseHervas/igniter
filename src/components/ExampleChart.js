import React, { Component } from 'react';
const picasso = require("picasso.js")

class ExampleChart extends Component {

  componentDidMount(){
    const data = this.props.data
    const chartid = this.props.chartid
   	picasso.chart({
   	  element: document.querySelector('#'+chartid),
   	  data,
   	  settings: {
   	    scales: {
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
   	    },
   	    components: [{
   	      type: 'axis',
   	      dock: 'left',
   	      scale: 'y'
   	    },{
   	      type: 'axis',
   	      dock: 'bottom',
   	      scale: 't'
   	    },{
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
   	  }
   	})
  }

  render() {
    return (
      <div id={this.props.chartid} className="chart-container" />
    );
  }
}

export default ExampleChart;
