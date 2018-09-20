import React, { Component } from 'react'
import {SessionObject,ChartContainer} from './HOCs'
import {tooltip,pieChart,barChart,lineChart,pointChart}  from './components'
import cubeExtractors from './cubeExtractors'
import hyperCubeTest from './config'
class App extends Component {
 
   
  render() {
    const engine = this.props.engine;
    const Session =SessionObject;
    return (
      <div className="page">
        <header className="header large animate">
          <div className="wrap">
            <div className="logo">
              <a href="index.html">
                <img src="flame.jpg" alt="LUI"/>
                <span className="App-title">Ignited Dashboard</span>
              </a>
            </div>
          </div>
        </header>
        <div className="content">
          <div className="intro">
            <div className="cover">
              <div className="showcase">
                <div className="overlay">
                  <span className="text">QlikSense using React.js with Picasso.js</span>
                </div>
              </div>
            </div>
            <div className="wrap">
            <tooltip.Register/>
 
             <SessionObject
                  engine={engine}
                  chartid="chart-0"
                  HyperCubeSpecs={hyperCubeTest}
                  Component={pieChart.Component}
                  Container={ChartContainer}
                  Scales={pieChart.Scales}
                  Axis={pieChart.Axis}
                  HyperCubeExtractor={cubeExtractors.ProductSales}
                  tooltip={tooltip}
              />
              <SessionObject
                  engine={engine}
                  chartid="chart-1"
                  Component={barChart.Component}
                  Container={ChartContainer}
                  Scales={barChart.Scales}
                  Axis={barChart.Axis}
                  HyperCubeSpecs={hyperCubeTest}
                  HyperCubeExtractor={cubeExtractors.ProductSales}
                  tooltip={tooltip}
              /> 
              
              <SessionObject
                  engine={engine}
                  chartid="chart-2"
                  HyperCubeSpecs={hyperCubeTest}
                  Component={lineChart.Component}
                  Container={ChartContainer}
                  Scales={lineChart.Scales}
                  Axis={lineChart.Axis}
                  HyperCubeExtractor={cubeExtractors.ProductSales}
                  tooltip={tooltip}/>
                  
                <SessionObject
                  engine={engine}
                  chartid="chart-3"
                  HyperCubeSpecs={hyperCubeTest}
                  Component={pointChart.Component}
                  Container={ChartContainer}
                  Scales={pointChart.Scales}
                  Axis={pointChart.Axis}
                  HyperCubeExtractor={cubeExtractors.ProductSales}
                  tooltip={tooltip}
              /> 
              
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="wrap">
           <p>Boilerplates By Malomatia</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
