import React, {PropTypes} from 'react';
import { Icon } from 'antd';

import styles from './TopNavMenu.less';
class TopNavMenu extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isOpen:false,
			courrentindex:0,
			contentindex:0,
		}
	}
	render(){
		const navItems = ['全部', '云计算基础服务', '大数据（数加）', '安全（云盾）', '域名与网站（万网）', '云市场'];
    	const nav_items = [];
    	for(let index in navItems){
    		let item=<li key={index} className={isCheckid(this,index)} onMouseOver={() => this.setState({courrentindex: index, contentindex: index })}>{navItems[index]}</li>;
    		nav_items.push(item);
    	}
		return(
			<div>
				<div className={styles.top_menu}>
					<div className={styles.top_menu_btn}  onClick={this.handleClick.bind(this)}>
						<span>更多功能</span>
						<Icon type={!this.state.isOpen ? "down" : "up"} className={styles.top_menu_btn_icon}/>
					</div>
				</div>
					<div className={this.state.isOpen ? styles.top_conent_show : styles.menu_content_hide} >
						
							<ul className={styles.top_menu_left}>
								{nav_items}
							</ul>
					
						<div key='0' className={TabIsChecked(this, 0)}>
							<ul className={styles.menu_content_right_nav}>
					              <li className={styles.header}>A</li>
					              <li>安全管家</li>
					              <li>API网关</li>
					              <li className={styles.header}>B</li>
					              <li>标准建站</li>
					              <li>表格存储</li>
					              <li className={styles.header}>C</li>
					              <li>采云间</li>
					              <li>CDN</li>
					              <li className={styles.header}>D</li>
					              <li>大数据计算服务</li>
					              <li>大数据开发套件</li>
					              <li>短信服务</li>
					              <li>对象存储 OSS</li>
					              <li>DataV数据可视化</li>
					              <li>DDos防护</li>
					              <li className={styles.header}>E</li>
					            </ul>
					            <ul className={styles.menu_content_right_nav}>
					              <li>E-MapReduce</li>
					              <li className={styles.header}>F</li>
					              <li>访问控制</li>
					              <li>分布式关系型数据库</li>
					              <li>分析性数据库</li>
					              <li>服务器安全（安骑士）</li>
					              <li>负载均衡</li>
					              <li className={styles.header}>H</li>              
					              <li>合作伙伴产品中心</li>
					              <li>画像分析</li>
					              <li>HTTPDNS</li>
					              <li className={styles.header}>J</li>
					            </ul>
						</div>
						  <div key='1' className={TabIsChecked(this, 1)}>1</div>
				          <div key='2' className={TabIsChecked(this, 2)}>2</div>
				          <div key='3' className={TabIsChecked(this, 3)}>3</div>
				          <div key='4' className={TabIsChecked(this, 4)}>4</div>
				          <div key='5' className={TabIsChecked(this, 5)}>5</div>
				</div>
			</div>
			);
		}

		handleClick(){
			this.setState({
				isOpen:!this.state.isOpen
			})
		}
	}

	function isCheckid(_this, index){
		return _this.state.courrentindex == index ? styles.active : ''
	}

	function TabIsChecked(_this, index){
		return _this.state.contentindex == index ? styles.menu_content_right : styles.menu_content_hide
	}

TopNavMenu.propTypes = {};

export default TopNavMenu;
