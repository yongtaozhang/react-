import { Breadcrumb } from 'antd';
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Show3d from '../../components/Photo/Show3d';
import TurnAround from '../../components/Photo/TurnAround';
import Muma from '../../components/Photo/Muma';
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
						  	<div className={styles.tu_divaround}>
						  		<div className={styles.tu_img}>
						  			<TurnAround />
						  		</div>	
						  	</div>
						  	<div className={styles.tu_muma}>
						  		<Muma />
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
