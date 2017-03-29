import React, { PropTypes, Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Menu, Breadcrumb, Icon, Button, Modal, Form, Input, Radio, Spin,Layout } from 'antd';
import styles from './Progress.less';
import { Progress } from 'antd';

import TableforPace from '../../components/TableforPace/TableforPace';



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
		const { presData, loading} = todos.getProgress;
		var j=0;
		if(loading){
			return (<Spin />);
		}

		const preshtml=[];
		for(let key in presData){
			preshtml.push(<div key={j} className={styles.tableh3}>
						{/*<h3 className={styles.tabletitleforpace}>{key}</h3>
						<Progress percent={50} status="active"/>*/}
						<TableforPace data={presData[key]}/>
					</div>);
			j++;
		}
		
		return(
			<div className={styles.main}>
				
				<div>
					<h2 className={styles.divtitle}>产品进度</h2>
					{preshtml}
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

