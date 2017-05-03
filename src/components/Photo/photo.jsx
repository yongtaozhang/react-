import React, { PropTypes, Component } from 'react';
import styles from './photo.less';

class Photo extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className={styles.gallery}>
		 		<h1>相框</h1>
		 		<ul>
		 			<li>
		 				<span className={styles.sp}><img src='../../../static/images/pic1.jpg'/></span>
		 				<div style={{display:'block'}}>
		 					<img src='../../../static/images/pic1.jpg'/>
		 				</div>
		 			</li>
		 			<li>
		 				<span><img src='../../../static/images/pic2.jpg'/></span>
		 				<div>
		 					<img src='../../../static/images/pic2.jpg'/>
		 				</div>
		 			</li>
		 			<li>
		 				<span><img src='../../../static/images/pic3.jpg'/></span>
		 				<div>
		 					<img src='../../../static/images/pic3.jpg'/>
		 				</div>
		 			</li>
		 			<li>
		 				<span><img src='../../../static/images/pic4.jpg'/></span>
		 				<div>
		 					<img src='../../../static/images/pic4.jpg'/>
		 				</div>
		 			</li>
		 			<li>
		 				<span><img src='../../../static/images/pic5.jpg'/></span>
		 				<div>
		 					<img src='../../../static/images/pic5.jpg'/>
		 				</div>
		 			</li>
		 		</ul>
			</div>
			)
	}
}
Photo.propTypes = {
};





export default Photo;