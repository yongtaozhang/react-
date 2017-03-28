import React, { PropTypes, Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

import styles from '../../components/LunBoTu/LunBoTu.less';


const imgdata = [
			  {
			    src: require('../../../static/images/lunbo1.jpg'),
			    alt: 'images-1',
			  },
			  {
			    src: require('../../../static/images/lunbo2.jpg'),
			    alt: 'images-2',
			  },
			  {
			    src: require('../../../static/images/lunbo3.jpg'),
			    alt: 'images-3',
			  },
			];
class LunBoTu extends Component{
	constructor(props){
		super(props);
		this.state={
			i:0
		}
	}

	turn(n){
			var _n=this.state.i+n;
			if(_n < 0){
				_n=_n+3;
			}
			if(_n>=3){
				_n=_n-3;
			}
			this.setState({
				i:_n
			})
		}

	goplay(){
		this.autoPlayFlag=setInterval(()=>{
			this.turn(1);
		},2000)
	}
	
	componentDidMount() {
		this.goplay();
	}
	

	render(){

			var lidata=[]
			var key=0;
			/*for(var value of imgdata){
				key++;
				lidata.push(<li  key={key}><img className={styles.tu_img} src={value.src} alt={value.alt}/></li>);
			}*/
			const j=this.state.i;
			const data=imgdata[j];
			console.log('data='+JSON.stringify(data));
		return(
			<div className={styles.tu_main}>
				<ul className={styles.tu_ul}>
					<li><img className={styles.tu_img} src={data.src} alt={data.alt}/></li>
				</ul>
			</div>

			);
	}

}
LunBoTu.propTypes = {
};

function filter(todos){
  return { ...todos };
}

function mapStateToProps({ todos }){
  return {
    todos: filter(todos),
  };
}

export default connect(mapStateToProps)(LunBoTu);