import React, {PropTypes, Component} from 'react';
import styles from './Muma.less';
	
var flag=false;
var sty="";
class Muma extends Component{
	constructor(props){
		super(props);
		this.state={
			i:0,
			isClick:false
		}
	}
	trunup(){
		var _n=this.state.i+1;
		sty="rotateY("+(-40 * _n)+"deg)";
		this.setState({
			i:_n,
			isClick:!this.state.isClick
		});
		
	}

	render(){
		return(
				<div className={styles.stage}>
					<div className={styles.container} onClick={this.trunup.bind(this)}>
						<img src="../../../static/images/lunbo1.jpg" height="150" width="200"/>
						<img src="../../../static/images/lunbo2.jpg" height="150" width="200"/>
						<img src="../../../static/images/lunbo3.jpg" height="150" width="200"/>
						<img src="../../../static/images/1.jpg" height="150" width="200"/>
						<img src="../../../static/images/pic1.jpg" height="150" width="200"/>
						<img src="../../../static/images/pic2.jpg" height="150" width="200"/>
						<img src="../../../static/images/pic3.jpg" height="150" width="200"/>
						<img src="../../../static/images/pic4.jpg" height="150" width="200"/>
						<img src="../../../static/images/pic5.jpg" height="150" width="200"/>
					</div>
				</div>
			)
	}
}
Muma.propTypes={};
export default Muma;