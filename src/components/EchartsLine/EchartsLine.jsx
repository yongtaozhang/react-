import React, { Component, PropTypes } from 'react';
import ReactEcharts from 'echarts-for-react';

class EchartsLine extends Component{
  constructor(props) {
    super(props);

  }

  render(){
    const {linetime ,title, lend, series}=this.props;
    console.log(series)
  	const option = {
    title: {
        text: title,
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:lend
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data:linetime
    },
    yAxis: {
        type: 'value'
    },
    series:series
    /*[
        {
            name:lend,
            type:'line',
            stack: '总量',
            data:linedatas
        }
       
    	]*/
	};
    return (
      <ReactEcharts option={option} notMerge={true} style={{height:'300px', width:'100%'}}/>
  		);
  }
}
  EchartsLine.propTypes = {
    series:PropTypes.array,
    linetime:PropTypes.array,
    title:PropTypes.string,
    lend:PropTypes.array,
};

export default EchartsLine;