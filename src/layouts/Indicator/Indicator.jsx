import React, { PropTypes, Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Menu, Breadcrumb, Icon, Button, Modal, Form, Input, Radio, Spin,Layout } from 'antd';
import styles from './Indicator.less';
import { Progress } from 'antd';

import CardofGCloud from '../../components/Cardtrking/CardofGCloud/CardofGCloud';


class Admine extends Component{
  constructor(props) {
    super(props);
    
  }
  componentWillMount(){
    const { todos,dispatch } = this.props;
    dispatch({
      type:'todos/getEcharts',
    });
  }
  render(){
    const { todos,dispatch } = this.props;
    const { cardData,loading } = todos.getCard;
    var j=0;
    if(loading){
      return (<Spin />);
    }
    const card=cardData.indicators;
    
    const cardhtml=[];
    for(var i=0;i< card.length;i++){
      cardhtml.push(<CardofGCloud key={j} data={card[i]}/>);
      j++;
      }    
    
    
    return(
      <div className={styles.main}>

        <div className={styles.carddiv}>
          <h2 className={styles.divtitle}>数据指标</h2>
          {cardhtml}
          {/*<CardofIT/>*/}
          {/*<CardofGCloud/>*/}
          {/*<CardofJK/>*/}
        </div>
        
        <div className={styles.footer}>

          <div style={{height:'4px',background:'#76933C'}}></div>
          XXXX@2017
        </div>
      </div>
    );
  }
};
Admine.propTypes = {
};

function filter(todos){
  return { ...todos };
}

function mapStateToProps({ todos }){
  return {
    todos: filter(todos),
  };
}

export default connect(mapStateToProps)(Admine);

