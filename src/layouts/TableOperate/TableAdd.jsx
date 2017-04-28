import React,{PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import styles from './TableOperate.less';
import FormComponent from '../../components/Form/FormComponent';



class TableAdd extends Component{
	constructor(props){
		super(props);
	}


	render(){
		const { todos }=this.props;
		const tableOnedata={};
	    return (
	      <div className={styles.main}>
	      		<FormComponent />
	      </div>
	    );
	}
}

TableAdd.propTypes={};
function filter(todos){
  return { ...todos };
}

function mapStateToProps({ todos }){
  return {
    todos: filter(todos),
  };
}

export default connect(mapStateToProps)(TableAdd);
