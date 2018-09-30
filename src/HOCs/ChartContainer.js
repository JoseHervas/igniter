import React, { Component } from 'react';
const picasso = require("picasso.js")
export class ChartContainer extends Component {

  constructor(props){
    super(props)
   
  }  
settings= {
  scales: this.props.Scales,
  components: [].concat(this.props.Component, this.props.Axis), // Concat the bar and axis' into a single array
  interactions:[this.props.tooltip.Interactions]}

  componentDidMount(){
   
   	picasso.chart({
   	  element: document.querySelector('#'+this.props.chartid),
       data:this.props.data,
       settings: {
        scales: this.props.Scales,
        components: [].concat(this.props.Component, this.props.Axis), // Concat the bar and axis' into a single array
        interactions:[].concat(this.props.tooltip.Interactions)}
     });

  }

  render() {
    if(this.props.tooltip){
      this.props.Component.push(this.props.tooltip.Component)

    }else{
      this.props.Component=null
    }
   
    return (
      <div id={this.props.chartid} className="chart-container" />
    );
  }
}

export default ChartContainer;
