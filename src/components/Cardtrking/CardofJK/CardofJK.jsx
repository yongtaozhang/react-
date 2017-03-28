import { Card, Col, Row } from 'antd';
import React, { Component, PropTypes } from 'react';
import styles from './CardofJK.less'

class CardofJK extends Component{
  constructor(props) {
    super(props);
    
  }
  render(){
    const bodyStyle={
      color:'#fff',
      height:'40px',
      fontSize:'14px',
      padding:'8px 8px',
      background:'#60497A'
    }
      return(
        <div style={{background:'#fff'}}>
        <div style={{ background: '#fff', padding: '30px 0 0 0' }}>
        <span className={styles.cardtitle}>运维监控</span>
        <div style={{height:'2px',background:'#76933C'}}></div>
          <Row>
            <Col span="4" className={styles.colstyle}>
              <Card title="响应时间" bordered={true} bodyStyle={bodyStyle}>70.00</Card>
              <span>低于指标0.5</span>
            </Col>
            <Col span="4" className={styles.colstyle}>
              <Card title="Card title" bordered={true} bodyStyle={bodyStyle}>Card content</Card>
            </Col>
            <Col span="4" className={styles.colstyle}>
              <Card title="Card title" bordered={true} bodyStyle={bodyStyle}>Card content</Card>
            </Col>
             <Col span="4" className={styles.colstyle}>
              <Card title="Card title" bordered={true} bodyStyle={bodyStyle}>Card content</Card>
            </Col>
            <Col span="4" className={styles.colstyle}>
              <Card title="Card title" bordered={true} bodyStyle={bodyStyle}>Card content</Card>
            </Col>
            <Col span="4" className={styles.colstyle}>
              <Card title="Card title" bordered={true} bodyStyle={bodyStyle}>Card content</Card>
            </Col>
          </Row>
          <Row>
            <Col span="4" className={styles.colstyle}>
              <Card title="响应时间" bordered={true} bodyStyle={bodyStyle}>70.00</Card>
              <span>低于指标0.5</span>
            </Col>
            <Col span="4" className={styles.colstyle}>
              <Card title="Card title" bordered={true} bodyStyle={bodyStyle}>Card content</Card>
            </Col>
            <Col span="4" className={styles.colstyle}>
              <Card title="Card title" bordered={true} bodyStyle={bodyStyle}>Card content</Card>
            </Col>
             <Col span="4" className={styles.colstyle}>
              <Card title="Card title" bordered={true} bodyStyle={bodyStyle}>Card content</Card>
            </Col>
            <Col span="4" className={styles.colstyle}>
              <Card title="Card title" bordered={true} bodyStyle={bodyStyle}>Card content</Card>
            </Col>
            <Col span="4" className={styles.colstyle}>
              <Card title="Card title" bordered={true} bodyStyle={bodyStyle}>Card content</Card>
            </Col>
          </Row>
        </div>
      </div>
        );
    }
  
};
CardofJK.proptypes={};
export default CardofJK;