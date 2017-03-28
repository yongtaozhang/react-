import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import styles from './Todos.less';

import NotFound from '../NotFound/NotFound';
import Lunbo from '../../layouts/lunbo/lunbo';

class Todos extends Component {
  constructor(props) {
    super(props);
    
  }
  render(){
    const {location}=this.props;
    if(location.pathname==='/a'){
      return (<NotFound/>);
    }else if(location.pathname==='/lunbo'){
      return (<Lunbo/>);
    }else{
      return (<NotFound/>);
    }
    }
  }

Todos.propTypes = {
};

export default Todos;