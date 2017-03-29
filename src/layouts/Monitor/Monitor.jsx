import React, { PropTypes, Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Menu, Breadcrumb, Icon, Button, Modal, Form, Input, Radio, Spin,Layout } from 'antd';
import styles from './Monitor.less';
import { Progress } from 'antd';

import EchartsLine from '../../components/EchartsLine/EchartsLine';


class Admine extends Component{
	constructor(props) {
		super(props);
		
	}
	componentWillMount(){
		const { todos,dispatch } = this.props;
		dispatch({
			type:'todos/getEcharts',
		});
	}
	render(){
		const { todos,dispatch } = this.props;
		const { echartsData, loading } = todos.getEcharts;
		var j=0;
		if(loading){
			return (<Spin />);
		}
		
		const line=[];
		const echarts=[];
		const echartname=[];

		for (var key in echartsData.state){
				
			if(key =='上海IT'){
				var linetimes=[];				
				const linename=[];
				var series=[];
			for (var value of echartsData.state[key]){
				const linedatas=[];
				const linetime=[];
				var tmp_series={
					name:'',
					type:'line',
					data:[]
				}
				for(var time in value['linedata']){
					const onetime=new Date(time * 1000).toLocaleString('chinese', {
					hour12: false});
					linetime.push(onetime);
					linedatas.push(value['linedata'][time].toFixed(2));
					
				}
					linetimes = linetime;
					tmp_series.name=value.linename;
					tmp_series.data=linedatas;
					//console.log(tmp_series);
					series.push(tmp_series);					
					linename.push(value.linename);
				}
				console.log(linetimes);
				//console.log(linename);
				echarts.push(<div key={j} className={styles.echarts}><EchartsLine  series={series} linetime={linetimes} title={key} lend={linename}/></div>);
				j++;
			}
			if(key =='南海IT'){
				
				var linetimes=[];
				const linename=[];
				var series=[];
				
			for (var value of echartsData.state[key]){
				const linetime=[];
				const linedatas=[];
				var tmp_series={
					name:'',
					type:'line',
					data:[]
				}
				for(var time in value['linedata']){
					const onetime=new Date(time * 1000).toLocaleString('chinese', {
					hour12: false});
					linetime.push(onetime);
					linedatas.push(value['linedata'][time].toFixed(2));					
				}
					linetimes = linetime;
					tmp_series.name=value.linename;
					tmp_series.data=linedatas;
					series.push(tmp_series);
					linename.push(value.linename);
				}
				console.log(linename);
				echarts.push(<div key={j} className={styles.echarts}><EchartsLine series={series} linetime={linetimes} title={key} lend={linename}/></div>);
				j++;
			}
			if(key =='东海IT'){
				var linetimes=[];
				const linename=[];
				var series=[];
				
			for (var value of echartsData.state[key]){
				const linetime=[];
				const linedatas=[];
				var tmp_series={
					name:'',
					type:'line',
					data:[]
				}
				for(var time in value['linedata']){
					const onetime=new Date(time * 1000).toLocaleString('chinese', {
					hour12: false});
					linetime.push(onetime);
					linedatas.push(value['linedata'][time].toFixed(2));					
				}
					linetimes = linetime;
					tmp_series.name=value.linename;
					tmp_series.data=linedatas;

					series.push(tmp_series);
					linename.push(value.linename);
				}
				//console.log(series);
				console.log(linename);
				echarts.push(<div key={j} className={styles.echarts}><EchartsLine series={series} linetime={linetimes} title={key} lend={linename}/></div>);
				j++;
			}

		}
		
		return(
			<div className={styles.main}>
				
				<div>
					<h2 className={styles.divtitle}>资源监控(包含所有虚机和物理机)</h2>
					<span className={styles.echartspan}>设备监控表</span>
					<div style={{height:'2px',background:'#76933C'}}></div>
					{echarts}
					{/*<div className={styles.echarts}>
						<EchartsLine/>
					</div>
					<div className={styles.echarts}>
						<EchartsLine/>
					</div>
					<div className={styles.echarts}>
						<EchartsLine/>
					</div>*/}
				</div>
				<div className={styles.footer}>

					<div style={{height:'4px',background:'#76933C'}}></div>
					XXXX@2017
				</div>
			</div>
		);
	}
};
Admine.propTypes = {
};

function filter(todos){
  return { ...todos };
}

function mapStateToProps({ todos }){
  return {
    todos: filter(todos),
  };
}

export default connect(mapStateToProps)(Admine);

