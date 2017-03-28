import { Table } from 'antd';
import React, { Component, PropTypes } from 'react';


class Tableforfollow extends Component{
	constructor(props) {
		super(props);
		
	}
	render(){
		const { data }=this.props;
		const columns = [{
			  title: '今日完成',
			  dataIndex: 'finished',
			  className:'text_center',
			  key:'finished'
			  //render: text => <a href="#">{text}</a>,
			}, {
			  title: '今日总量',
			  className:'text_center',
			  dataIndex: 'alltotal',
			  key:'alltotal'
			}, {
			  title: '今日延期',
			  className:'text_center',
			  dataIndex: 'delay',
			  key:'delay'
			}, {
			  title: '今日更新',
			  className:'text_center',
			  dataIndex: 'update',
			  key:'update'
			}, {
			  title: '延期比',
			  className:'text_center',
			  render:function (data){
			  	return (data.delay)/(data.alltotal)+"%";
			  }
			}];

		return(
			 <Table
			    columns={columns}
			    dataSource={data}
			    bordered
			    pagination={false}
  				/>
			);
	}

};
Tableforfollow.proptypes={
	 	data: PropTypes.array.isRequired,
  		loading: PropTypes.bool,
};
export default Tableforfollow;