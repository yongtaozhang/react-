import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import styles from './MainLayout.less';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import TopNav from '../../components/TopNav/TopNav';// 顶部导航组件

class MainLayout extends React.Component{

   state = {
    collapsed: false,
    logo: {color: "#FFF", fontSize: "16px", fontWeight: "bold", textAlign:'center', display: 'block',padding: '10px 0'},
    mode: 'inline',
    openKey:['sub1'],
    };
    onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({
        collapsed,
        logo: collapsed ? { display: 'none' } : { color: "#FFF", fontSize: "16px", fontWeight: "bold", textAlign:'center', display: 'block', padding: '10px 0' },
        mode: collapsed ? 'vertical' : 'inline',
        openKeys: collapsed ? [''] : ['sub1'],
        collapsed: !this.state.collapsed,
      });
    }
  render(){
    return(

        <Layout style={{ height: '100vh' }}>

        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse} 
          width={240}
          collapsedWidth={65}         
        >   
        <p style={{textAlign:'center'}}><img src='../../../static/images/timg.jpg' width='50' height='50'/></p>
        <p style={this.state.logo}>项目汇总</p>

          <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>
              
      
            <SubMenu key="sub1" title={<span><Icon type="database" /><span className="nav-text">项目跟踪</span></span>}>
              <Menu.Item key="0">
                  <Link to='/main'><Icon type="heart"/>项目跟进</Link>
              </Menu.Item>
              <Menu.Item key="1">
                  <Link to='/indicator'><Icon type="credit-card"/>数据指标</Link>
              </Menu.Item>
              <Menu.Item key="2">
                  <Link to='/progress'><Icon type="sync" />产品进度</Link>
              </Menu.Item>
              <Menu.Item key="3">
                  <Link to='/monitor'><Icon type="line-chart" />资源监控</Link>
              </Menu.Item>
               <Menu.Item key="4">
                  <Link to='/table'><Icon type="line-chart" />表格操作</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="picture" /><span className="nav-text">小效果</span></span>}
            >
              <Menu.Item key="7">
                <Link to='/lunbo'><Icon type="like-o" />轮播</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to='/echarts'><Icon type="like-o"/>可视化图表</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to='/show'><Icon type="like-o"/>HTML5+CSS3</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to='/nothing'><Icon type="like-o"/>无页面</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        
        <Layout>
         <TopNav/>
         {this.props.children}
         <div className={styles.footer}>
          <div style={{height:'4px',background:'#76933C'}}></div>
          XXXX@2017
        </div>
        </Layout>
        
      </Layout>

      )
  }
};
MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
