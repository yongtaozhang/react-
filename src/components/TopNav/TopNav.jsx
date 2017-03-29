import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { Menu, Icon } from 'antd';


import styles from './TopNav.less';

class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render(){
      var date=new Date();
      var time=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    return (
        <div className={styles.top_side}>
          <div className={styles.head}>
                  <Link to="/main">
                  <img src="/static/images/timg.jpg" height="120" width="120" />
                  <span className={styles.sptext}>优质的汇总</span></Link>     
          </div>
          <p className={styles.topspp}>信息汇总{time}</p>
        </div>      
    ); 
  }
  
};

TopMenu.propTypes = {
};

export default TopMenu;