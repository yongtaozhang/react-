import { Card, Col, Row } from 'antd';
import React, { Component, PropTypes } from 'react';
import styles from './CardofGCloud.less'

class CardofGCloud extends Component{
  constructor(props) {
    super(props);
    
  }
  render(){
    const { data }= this.props;
    const bodyStyle={
      color:'#fff',
      height:'40px',
      fontSize:'14px',
      padding:'8px 8px',
      background:'#31869B'
    }
    const col=[];
    var i=0;
    for(let key in data){
      if(key != "name"){
        col.push(<Col key={i} span="4" className={styles.colstyle}>
                <Card title={key} bordered={true} bodyStyle={bodyStyle}>{data[key]}</Card>
                <span className={styles.sp}>低于指标0.5</span>
              </Col>)
        i++;
      }
    }
      return(
        <div style={{background:'#fff',clear:'both'}}>
        <div style={{ background: '#fff', padding: '30px 0 0 0' }}>
        <span className={styles.cardtitle}>{data.name}</span>
        <div style={{height:'2px',background:'#76933C'}}></div>
          <Row>
          {col}
          </Row>
        </div>
      </div>
        );
    }
  
};
CardofGCloud.proptypes={};
export default CardofGCloud;