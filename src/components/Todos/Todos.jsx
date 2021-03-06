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
import TableOperate from '../../layouts/TableOperate/TableOperate';
import TableUpdata from '../../layouts/TableOperate/TableUpdata';
import TableAdd from '../../layouts/TableOperate/TableAdd';
import Show from '../../layouts/Show/Show';

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
    }else if(location.pathname==='/table'){
      return (<TableOperate/>);
    }else if(location.pathname==='/updata'){
      return (<TableUpdata/>);
    }else if(location.pathname==='/tableadd'){
      return (<TableAdd/>);
    }else if(location.pathname==='/show'){
      return (<Show/>);
    }else{
      return (<NotFound/>);
    }
    }
  }

Todos.propTypes = {
};

export default Todos;