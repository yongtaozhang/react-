import { Table } from 'antd';
import { Progress } from 'antd';
import React, { Component, PropTypes } from 'react';
import styles from './TableforPace.less';


class TableforPace extends Component{
	constructor(props) {
		super(props);
		
	}

	render(){
		const {data}=this.props;
		const columns = [{
			  title: '内容',
			  dataIndex: 'name',
			  //render: text => <a href="#">{text}</a>,
			}, {
			  title: '进度',
			  dataIndex: 'pres',
			  render: (text,record)=>{
			  	const j=parseInt(text);
			  	return(<Progress percent={j} strokeWidth={5} status="active" />);
			  }
			}];			
		return(
			<div>
			<h3>{data[0].pjname}</h3>
			<Progress percent={data[0].pjpres} status="active"/>
			 <Table
			    columns={columns}
			    dataSource={data}
			  
			    bordered={true}
			    pagination={false}
  				/>
  		</div>
			);
	}

};
TableforPace.proptypes={};
export default TableforPace;