import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import styles from './MainLayout.less';

import TopNav from '../../components/TopNav/TopNav';// 顶部导航组件

const MainLayout = ({ children }) => {
  return (
    <div className={styles.normal}>
      {/* 顶部 */}
      <TopNav />
      {/* 下部主体部分 */}
      <div className={styles.bottom_side}>
        {children}
      </div>     
      {/* footer */}
      {/*<div className={styles.footer}>
        QIM | 奇目 2.0 
      </div>*/}

    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
