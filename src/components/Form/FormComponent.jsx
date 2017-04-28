import React,{PropTypes, Component} from 'react';
import { Form, Icon, Input, Button, Checkbox, message, notification } from 'antd';
import { Link } from 'react-router';
import {connect } from 'react-redux';
import styles from './FormComponent.less';
const FormItem = Form.Item;



class FormComponent extends Component{
	constructor(props){
		super(props);
	}

	

	render(){
		
		var flag=true;
		const {dataSouce, todos}=this.props;
		if(typeof(dataSouce)==='undefined'){
			flag=false;
		}
		const btn=flag ? <Button type="primary" htmlType="submit">修改</Button> : <Button type="primary" htmlType="submit">添加</Button>
		const { getFieldDecorator } = this.props.form;
		const formLayout={
			labelCol:{span:6},
			wrapperCol:{span:8},
		}
		const check_age = (rule, value, callback) => {
			const ageReg=new RegExp("^(?:[1-9][0-9]?|1[01][0-9]|120)$");
			if(ageReg.test(value)){
				callback();
			}else{
				callback('年龄格式错误！');
			}
		}
		const  handleSubmitAdd = (e) => {
		    e.preventDefault();
		    this.props.form.validateFields((err, values) => {
		      if (!err) {
		      	notification.open({
		            message: '创建监控项',
		            description: '任务正在创建中......',
		            duration: 2,
		            placement:'topRight'
		          });
		        console.log('Add: ', values);
		      }
		    });
		  }
		const  handleSubmit = (e) => {
		    e.preventDefault();
		    this.props.form.validateFields((err, values) => {
		      if (!err) {
		      	notification.open({
		            message: '创建监控项',
		            description: '任务正在创建中......',
		            duration: 2,
		            placement:'topRight'
		          });
		        console.log('Received values of form: ', values);
		      }
		    });
		  }
		  //let updataload=todos.getTabledata.loading;
	    return (
	    	<div className={styles.content}>
		      <Form onSubmit={flag ? handleSubmit : handleSubmitAdd}>
		        <FormItem
		         	{...formLayout}
		         	label='姓名'
		        >
		          {getFieldDecorator('userName', {
		            rules: [{ required: true, message: '姓名不能为空' }],
		            	initialValue: flag ? `${dataSouce.name}` : ''
		        	
		          })(
		            <Input/>
		          )}
		        </FormItem>
		        <FormItem
		        	{...formLayout}
		        	label='年龄'
		        	hasFeedback
		        >
		          {getFieldDecorator('age', {
		            rules: [
		            		{ required: true, message: '年龄不能为空' },
		            		{ validator: check_age },
		            ],
		            initialValue:flag ? `${dataSouce.age}` :''
		          })(
		            <Input />
		          )}
		        </FormItem>
		        <FormItem
		        	{...formLayout}
		        	label='地址'
		        >
		          {getFieldDecorator('address', {
		            rules: [{ required: true, message: '地址不能为空' }],
		            initialValue:flag ? `${dataSouce.address}` :''
		          })(
		            <Input />
		          )}
		        </FormItem>
		        <FormItem	
		        wrapperCol={{ span: 12, offset: 6 }}
		        >
		         
		         {btn}
		          &nbsp;&nbsp;&nbsp;
                  <Link to="/table"><Button type="ghost" size="large">返回</Button></Link>
		        </FormItem>
		      </Form>
	      </div>
	    );
	}
}
FormComponent=Form.create()(FormComponent);
FormComponent.propTypes={
	dataSouce:PropTypes.object,
	handleSubmit:PropTypes.func
};
function filter(todos){
  return { ...todos };
}

function mapStateToProps({ todos }){
  return {
    todos: filter(todos),
  };
}

export default connect(mapStateToProps)(FormComponent);
