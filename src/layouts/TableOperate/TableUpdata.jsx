import React,{PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import styles from './TableOperate.less';
import FormComponent from '../../components/Form/FormComponent';



class TableUpdata extends Component{
	constructor(props){
		super(props);
	}


	render(){

		const { todos }=this.props;
		const {tableOnedata}= todos.getTabledata;
		
	    return (
	      <div className={styles.main}>
	      		<FormComponent dataSouce={tableOnedata} />
	      </div>
	    );
	}
}

TableUpdata.propTypes={};
function filter(todos){
  return { ...todos };
}

function mapStateToProps({ todos }){
  return {
    todos: filter(todos),
  };
}

export default connect(mapStateToProps)(TableUpdata);
