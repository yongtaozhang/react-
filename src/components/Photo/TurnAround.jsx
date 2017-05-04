import React, {PropTypes, Component} from 'react';
import styles from './TurnAround.less';

class TurnAround extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className={styles.main}>
				<ul>
					<li>
						<a href='#' target='_blank'>
							<div><img src='../../../static/images/2.jpg'/></div>
							<div> 
							<h3>日向雏田</h3>
	                    	<p>
	                        我认为是火影中最漂亮的
	                        </p>
                        </div>
						</a>
					</li>
					<li>
						<a href='#' target='_blank'>
							<div><img src='../../../static/images/1.jpg' width="225" height="180"/></div>
							<div> 
							<h3>Saber</h3>
	                    	<p>
	                        Fate系类中女神啊
	                        </p>
                        </div>
						</a>
					</li>
				</ul>
			</div>
			)
	}
}
TurnAround.propTypes={};
export default TurnAround;