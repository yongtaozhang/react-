import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import styles from './Todos.less';

import NotFound from '../NotFound/NotFound';
import Lunbo from '../../layouts/lunbo/lunbo';
import Admine from '../../layouts/Admine/Admine';
import Indicator from '../../layouts/Indicator/Indicator';
import Progress from '../../layouts/Progress/Progress';
import Monitor from '../../layouts/Monitor/Monitor';
import Echarts from '../../layouts/Echarts/Echarts';

class Todos extends Component {
  constructor(props) {
    super(props);
    
  }
  render(){
    const {location}=this.props;
    if(location.pathname==='/main'){
      return (<Admine/>);
    }else if(location.pathname==='/lunbo'){
      return (<Lunbo/>);
    }else if(location.pathname==='/indicator'){
      return (<Indicator/>);
    }else if(location.pathname==='/progress'){
      return (<Progress/>);
    }else if(location.pathname==='/monitor'){
      return (<Monitor />);
    }else if(location.pathname==='/'){
      return (<Admine />);
    }else if(location.pathname==='/echarts'){
      return (<Echarts/>);
    }else{
      return (<NotFound/>);
    }
    }
  }

Todos.propTypes = {
};

export default Todos;