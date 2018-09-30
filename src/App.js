import React, { Component } from 'react'
import {SessionObject,ChartContainer} from './HOCs'
import {tooltip,pieChart,barChart,lineChart,pointChart}  from './components'
import cubeExtractors from './cubeExtractors'
import hyperCubeTest from './config'
class App extends Component {
componentDidMount(){
  tooltip.Register()
}
  render() {
    const engine = this.props.engine;
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
                  <span className="text">Bring dashboarding to live</span>
                </div>
              </div>
            </div>
            <div className="wrap">
 
             <SessionObject
                  engine={this.props.engine}
                  chartid="thepieChart"
                  HyperCubeSpecs={hyperCubeTest}
                  Component={pieChart.Component}
                  Container={ChartContainer}
                  Scales={pieChart.Scales}
                  Axis={pieChart.Axis}
                  HyperCubeExtractor={cubeExtractors.ProductSales}
                  tooltip={tooltip}
              />
              <SessionObject
                  engine={this.props.engine}
                  chartid="barchart"
                  Component={barChart.Component}
                  Container={ChartContainer}
                  Scales={barChart.Scales}
                  Axis={barChart.Axis}
                  HyperCubeSpecs={hyperCubeTest}
                  HyperCubeExtractor={cubeExtractors.ProductSales}
                  tooltip={tooltip}
              /> 
              
              <SessionObject
                  engine={this.props.engine}
                  chartid="linechart"
                  HyperCubeSpecs={hyperCubeTest}
                  Component={lineChart.Component}
                  Container={ChartContainer}
                  Scales={lineChart.Scales}
                  Axis={lineChart.Axis}
                  HyperCubeExtractor={cubeExtractors.ProductSales}
                  tooltip={tooltip}/>
                  
                <SessionObject
                  engine={this.props.engine}
                  chartid="pointchart"
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
            <h2 className="footer-title">License and attributions</h2>
            <p>Made with <a href="https://github.com/qlik-oss/leonardo-ui=">Leonardo UI</a>, <a href="https://github.com/qlik-oss/enigma.js/">Enigma.js</a>, <a href="https://github.com/qlik-oss/picasso.js">Picasso.js</a> ... and a little of ❤</p>
            <p>Website design inspired in <a href="https://qlik-oss.github.io/leonardo-ui/">Leonardo's demo page</a>. Fire image created by <a href="https://www.freepik.com/free-photos-vectors/abstract">Freepik</a></p>
            <p>Licensed under MIT</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
