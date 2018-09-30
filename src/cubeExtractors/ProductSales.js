import React, { Component } from 'react';

export  class ProductSales extends Component{
constructor(props){
super(props);
this.state={data:null}
}
    render(){
        const HQ=this.props.HyperCubeSpecs;
        const engine=this.props.engine;
        this.createObject(HQ,engine);
        if (this.state.data){
        return (<this.props.Container {...this.props} data={this.state.data}/>);
        } else {
            return null
          }
    }

    //extracting the data from the HyperCube 
    createObject(HQ,engine){
        engine.createObject(HQ)
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
         const data= [{
                type: 'matrix',
                data: arr
            }];
            this.setState({data:data}) ;
            
            
          });
         
        })
    }
}

    export default ProductSales;