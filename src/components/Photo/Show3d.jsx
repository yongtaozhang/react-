import React ,{PropTypes,Component} from 'react';
import styles from './Show3d.less';



class Show3d extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
				<div>
					<ul className={styles.main}>
						<li>
					        <div className={styles.wrapper}>
					            <img src="../../../static/images/pic1.jpg" height="100" width="460" />
					            <span>
					              <strong>标题</strong> 这是一幅画.
					            </span>
					        </div>
    					</li>
					</ul>	
				</div>
			)
	}
}
Show3d.propTypes={

}
export default Show3d;