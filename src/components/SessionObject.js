import React, { Component } from 'react';
import ExampleChart from './ExampleChart';

class SessionObject extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: null,
    }
  }

  componentDidMount(){
    const engine = this.props.engine;
    engine.createObject(this.props.HyperCubeSpecs)
    .then((object) => {
      object.getLayout().then((layout) => {
        const values = layout.qHyperCube.qDataPages[0].qMatrix;
        const arr = [
            ['Product group', 'Sales ($)']
        ];
        for (let m = 0; m < values.length; m++) {
          arr.push([
            values[m][0]['qText'],
            parseInt(values[m][1]['qNum'], 0)
          ]);
        };
        const data = [{
            type: 'matrix',
            data: arr
        }];
        this.setState({data: data})
      });
  })
}

  render() {
    if (this.state.data){
      return <ExampleChart
                      chartid={this.props.chartid}
                      data={this.state.data}
                    />
    } else {
      return null
    }
  }
}

export default SessionObject;
