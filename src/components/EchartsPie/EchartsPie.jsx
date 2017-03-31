import React,{Component} from 'react';

	var echarts=require('echarts/lib/echarts')
		require('echarts/lib/chart/pie') //图表类型
		require('echarts/lib/component/title') //标题插件

	class EchartsPie extends Component{
		constructor(props){
			super(props);
			this.setPieOption=this.setPieOption.bind(this);
			this.InitPie=this.InitPie.bind(this);
		}
		InitPie(){
			const { data } = this.props
	        let myChart = echarts.init(this.refs.pieReact)
	        let options = this.setPieOption()
	        myChart.setOption(options)
		}
		componentDidMount() {
			this.InitPie();
		}
		componentDidUpdate() {
			this.InitPie();
		}
		render(){
			return(
				<div>
					<div ref='pieReact' style={{width:'100%',height:'200px'}}></div>
				</div>
				)
		}
	setPieOption(data) {
        return {
        	legend: {
					   orient: 'vertical',
					   x: 'left',
					   data:['直接访问','邮件营销']
					    },
            series : [
                {
                    name: '比例',
                    type: 'pie',
                    radius: ['70%', '90%'],
                    avoidLabelOverlap: true,
                    data:[
			                {value:100, name:'直接访问'},
			                {value:310, name:'邮件营销'}
			                
			            ],
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            textStyle: {
                                fontSize: '18'
                            },
                            formatter: "{d}% \n{b}",
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '18',
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    }
                }
            ]
        }
    }
}
export default EchartsPie;
