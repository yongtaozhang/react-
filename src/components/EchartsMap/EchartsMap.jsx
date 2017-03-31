import React,{Component} from 'react';

var echarts = 	require('echarts/lib/echarts');
				require('echarts/lib/chart/map');
				require('echarts/map/js/china');
				require('echarts/lib/component/tooltip');
				require('echarts/lib/component/title');
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
class EchartsMap extends Component{
	constructor(props){
		super(props);
		this.InitMap=this.InitMap.bind(this);
		this.setMapOption=this.setMapOption.bind(this);
	}
	InitMap(){
		const { data }=this.props;
		let myChart=echarts.init(this.refs.mapEcharts);
		let option=this.setMapOption(data);
		myChart.setOption(option);
	}
	componentDidMount() {
		this.InitMap();
	}
	componentDidUpdate() {
		this.InitMap();
	}
	render(){
		return(
			<div>
				<div ref='mapEcharts' style={{width:'100%',height:'500px'}}></div>
			</div>
			)
	}
	setMapOption(data){
		return{
				backgroundColor: '#404a59',
			    title : {
			        text: '模拟迁徙',
			        subtext: '数据纯属虚构',
			        left: 'center',
			        textStyle : {
			            color: '#fff'
			        }
			    },
			    tooltip : {
			        trigger: 'item'
			    },
			    legend: {
			        orient: 'vertical',
			        top: 'top',
			        left: 'top',
			        data:['北京'],
			        textStyle: {
			            color: '#fff'
			        },
			        selectedMode: 'single'
			    },
			    geo: {
			        map: 'china',
			        label: {
			            emphasis: {
			                show: false
			            }
			        },
			        roam: true,
			        itemStyle: {
			            normal: {
			                areaColor: '#323c48',
			                borderColor: '#404a59'
			            },
			            emphasis: {
			                areaColor: '#2a333d'
			            }
			        }
			    },
			    series: [{
				        name: '北京',
				        type: 'lines',
				        zlevel: 2,
				        symbol: ['none', 'arrow'],
				        symbolSize: 10,
				        effect: {
				            show: true,
				            period: 6,
				            trailLength: 0,
				            symbol: planePath,
				            symbolSize: 15
				        },
				        lineStyle: {
				            normal: {
				                color: '#a6c84c',
				                width: 1,
				                opacity: 0.6,
				                curveness: 0.2
				            }
				        },
				        data: [{
				        	fromName: '上海',
			                toName:'北京',
			                coords: [[121.4648,31.2891], [116.4551,40.2539]]
				        }]
    					},
    					{
    						
					        type: 'effectScatter',
					        coordinateSystem: 'geo',
					        zlevel: 2,
					        rippleEffect: {
					            brushType: 'stroke'
					        },
					        label: {
					            normal: {
					                show: true,
					                position: 'right',
					                formatter: '{b}'
					            }
					        },
					       
					        itemStyle: {
					            normal: {
					                color:'#a6c84c'
					            }
					        },
					        data: [{
					                name: '北京',
					                value: [116.4551,40.2539]
					            },{
					                name: '上海',
					                value: [121.4648,31.2891]
					            }]
					       
    					}
    					]
					
				}
			}
}
export default EchartsMap;
