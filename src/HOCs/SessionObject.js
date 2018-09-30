import React, { Component } from 'react';
export class SessionObject extends Component {
  render() {
  
    //  alert(JSON.stringify('hypercube data'+this.state.data));
      return <this.props.HyperCubeExtractor {...this.props}  />

  }
}

export default SessionObject;
