import React,{PropTypes, Component} from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { Button} from 'antd';
import TableList from '../../components/TableList/TableList';
import styles from './TableOperate.less';

class TableOperate extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const { dispatch } = this.props;
		const updata = (values) => {
			dispatch({
				type:'todos/tableOnelist',
				payload:values
			})
			browserHistory.push('/updata');
		}
		return(
			<div className={styles.main}>
				<div style={{ height: 240 }}>
					<Link to="/tableadd">
						<Button type="primary" className={styles.btn}>添加成员</Button>
					</Link>
					<div className={styles.tablemain}>
						<TableList updata={updata}/>
					</div>
				</div>
			</div>

			);
	}
}
TableOperate.propTypes={};

function filter(todos){
  return { ...todos };
}

function mapStateToProps({ todos }){
  return {
    todos: filter(todos),
  };
}

export default connect(mapStateToProps)(TableOperate);

