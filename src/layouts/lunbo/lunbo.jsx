import { Breadcrumb } from 'antd';
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import LunBoTu from '../../components/LunBoTu/LunBoTu';
import Photo from '../../components/Photo/photo';
import styles from '../lunbo/Lunbo.less'


class Lunbo extends Component{
		constructor(props){
			super(props);
		}
		render(){

			return(
					<div className={styles.main}>
						  	<div className={styles.tu_div}>
						  		<LunBoTu />
						  	</div>
					 		<div className={styles.tu_div2}>
					 			<Photo />
					 		</div>

					  </div>
				);
		}

}
Lunbo.propTypes = {
};

function filter(todos){
  return { ...todos };
}

function mapStateToProps({ todos }){
  return {
    todos: filter(todos),
  };
}

export default connect(mapStateToProps)(Lunbo);
