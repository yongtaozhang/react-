import React, { PropTypes, Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import styles from './Admine.less';
import { Progress } from 'antd';

import Tableforfollow from '../../components/Tableforfollow/Tableforfollow';


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
		var j=0;
		if(loading){
			return (<Spin />);
		}
		const track=data.track;
		const table=[];
		const tabledata=[];
		for(let i=0;i< track.length;i++){
			tabledata.push(track[i]);
		}
		for(var i=0;i< tabledata.length;i++){
			var tData=[];
			tData.push(tabledata[i]);
			table.push(<div key={j} className={styles.tableh}><h3 className={styles.tabletitle}>{tabledata[i].pjtname}</h3><Tableforfollow bordered={true} data={tData}/></div>);
			j++;
		};
		
		return(
			<div className={styles.main}>
				<div>
					<h2 className={styles.divtitle}>项目跟进</h2>
					{table}
					
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

