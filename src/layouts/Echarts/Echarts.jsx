import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from '../Echarts/Echarts.less';
import EchartPie from '../../components/EchartsPie/EchartsPie';
import EchartMap from '../../components/EchartsMap/EchartsMap';

class Echarts extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			 <div className={styles.main}>

	        <div className={styles.carddiv}>
	          <h2 className={styles.divtitle}>可视化工具</h2>
	         	<EchartPie />
	         	<EchartMap />
	        </div>
	        
      </div>
			)
	}
}
Echarts.propTypes = {
};
function filter(todos){
  return { ...todos };
}

function mapStateToProps({ todos }){
  return {
    todos: filter(todos),
  };
}

export default connect(mapStateToProps)(Echarts);