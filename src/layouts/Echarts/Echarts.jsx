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
	          <h2 className={styles.divtitle}>数据指标</h2>
	         	<EchartPie />
	         	<EchartMap />
	        </div>
	        
	        <div className={styles.footer}>

          <div style={{height:'4px',background:'#76933C'}}></div>
          XXXX@2017
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