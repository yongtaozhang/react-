import React, { PropTypes, Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Menu, Breadcrumb, Icon, Button, Modal, Form, Input, Radio, Spin,Layout } from 'antd';
import styles from './Admine.less';
import { Progress } from 'antd';

import TopNav from '../../components/TopNav/TopNav';
import CardofIT from '../../components/Cardtrking/CardofIT/CardofIT';
import CardofGCloud from '../../components/Cardtrking/CardofGCloud/CardofGCloud';
import CardofJK from '../../components/Cardtrking/CardofJK/CardofJK';
import Tableforfollow from '../../components/Tableforfollow/Tableforfollow';
import TableforPace from '../../components/TableforPace/TableforPace';
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
		const { data , loading } = todos.getTrack;
		const { cardData } = todos.getCard;
		const { presData } = todos.getProgress;
		const { echartsData } = todos.getEcharts;
		
		if(loading){
			return (<Spin />);
		}
		const track=data.track;
		const card=cardData.indicators;
		const table=[];
		const tabledata=[];
		for(let i=0;i< track.length;i++){
			tabledata.push(track[i]);
		}
		for(var i=0;i< tabledata.length;i++){
			var tData=[];
			tData.push(tabledata[i]);
			table.push(<div key={i} className={styles.tableh}><h3 className={styles.tabletitle}>{tabledata[i].pjtname}</h3><Tableforfollow bordered={true} data={tData}/></div>);
		};
		const cardhtml=[];
		for(var i=0;i< card.length;i++){
			cardhtml.push(<CardofGCloud key={i} data={card[i]}/>);
			}

		const preshtml=[];
		for(let key in presData){
			preshtml.push(<div key={i} className={styles.tableh3}>
						{/*<h3 className={styles.tabletitleforpace}>{key}</h3>
						<Progress percent={50} status="active"/>*/}
						<TableforPace data={presData[key]}/>
					</div>);
			i++;
		}
		const hanldClick =function (){
			browserHistory.push('/lunbo');
		};
		
		const line=[];
		const echarts=[];
		const echartname=[];
		var i=0;
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
				echarts.push(<div key={i} className={styles.echarts}><EchartsLine  series={series} linetime={linetimes} title={key} lend={linename}/></div>);
				i++;
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
				echarts.push(<div key={i} className={styles.echarts}><EchartsLine series={series} linetime={linetimes} title={key} lend={linename}/></div>);
				i++;
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
				echarts.push(<div key={i} className={styles.echarts}><EchartsLine series={series} linetime={linetimes} title={key} lend={linename}/></div>);
				i++;
			}

		}
		
		return(
			<div className={styles.main}>
				<TopNav/>
				<div>
					<h2 className={styles.divtitle}>项目跟进<a style={{color:'#f00'}} onClick={()=>hanldClick()}>轮播</a></h2>
					{table}
					
				</div>

				<div className={styles.carddiv}>
					<h2 className={styles.divtitle}>数据指标</h2>
					{cardhtml}
					{/*<CardofIT/>*/}
					{/*<CardofGCloud/>*/}
					{/*<CardofJK/>*/}
				</div>
				<div>
					<h2 className={styles.divtitle}>产品进度</h2>
					{preshtml}
				</div>
				<div>
					<h2 className={styles.divtitle}>资源监控(包含所有虚机和物理机)</h2>
					<span className={styles.echartspan}>设备监控数量</span>
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

