import { Breadcrumb } from 'antd';
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Show3d from '../../components/Photo/Show3d';
import styles from '../lunbo/Lunbo.less';



class Show extends Component{
		constructor(props){
			super(props);
		}
		render(){

			return(
					<div className={styles.main}>
						  	<div className={styles.tu_div3d}>
						  		<Show3d />
						  	</div>

					  </div>
				);
		}

}
Show.propTypes = {
};

function filter(todos){
  return { ...todos };
}

function mapStateToProps({ todos }){
  return {
    todos: filter(todos),
  };
}

export default connect(mapStateToProps)(Show);
