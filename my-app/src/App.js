import React, { Component } from 'react';
import logo from './logo.svg';
import ReactEcharts from 'echarts-for-react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.loadData();
  } 
  loadData() {
    fetch('http://www.dromic.net/experiments/geolinks/geo_investments.txt')
    .then((r) => r.text())
    .then(text  => {
      console.log(text);
    })
  }
  getOption() {
    return {
      title: {
        text: 'Sankey Diagram'
      },
      tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
      },
      series: [
          {
              type: 'sankey',
              //data: data.nodes,
              //links: data.links,
              focusNodeAdjacency: 'allEdges',
              itemStyle: {
                  normal: {
                      borderWidth: 1,
                      borderColor: '#aaa'
                  }
              },
              lineStyle: {
                  normal: {
                      color: 'source',
                      curveness: 0.5
                  }
              }
          }
      ]
    };
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
