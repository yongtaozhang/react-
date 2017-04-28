import {Table} from 'antd';
import React,{PropTypes} from 'react';
import styles from './TableList.less';



class TableList extends React.Component{
	constructor(props){
		super(props);
	}


	render(){
		const {updata}=this.props;
		const columns = [{
				  title: '姓名',
				  dataIndex: 'name',
				  key:'name',
				}, {
				  title: '年龄',
				  dataIndex: 'age',
				  key:'age',
				}, {
				  title: '地址',
				  dataIndex: 'address',
				  key:'address',
				},{
					title:'操作',
					key:'action',
					dataIndex:'',
					render:(text,record) => <span><a onClick={()=>updata(record)}>修改</a><span className="ant-divider" /><a href='#'>删除</a></span>,
				}];
				const data = [{
				  name: 'John Brown',
				  age: 32,
				  address: 'New York No. 1 Lake Park',
				}, {
				  name: 'Jim Green',
				  age: 42,
				  address: 'London No. 1 Lake Park',
				}, {
				  name: 'Joe Black',
				  age: 32,
				  address: 'Sidney No. 1 Lake Park',
				}];

		return(
			<div style={{backgroundColor:'#fff'}}>
			    <Table columns={columns} dataSource={data}/>
			</div>
			)
	}

}
TableList.propTypes={
	  updata: PropTypes.func
};
export default TableList;