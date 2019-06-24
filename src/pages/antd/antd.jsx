import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Row, Col,Button } from 'antd';
import Form from './components/Form';
import OnBlurDemo from './components/onblurdemo';
import './antd.less'
export default class antd extends Component {
  render() {
    console.log();
    return (
      <Row style={{ height: '100vh', marginTop:"10px" }}>
        <Col
          xs={6}
          style={{
            height: '100vh',
            Width: '200px',
            maxWidth: '300px'
          }}
        >
          <div className="form-left">
            <ul>
              <li><NavLink to={`${this.props.match.path}/formdemo`}>Form表单</NavLink></li>
              <li><NavLink to={`${this.props.match.path}/onblurdemo`}>onBlur同时校验</NavLink></li>
            </ul>
          </div>
        </Col>
        <Col xs={18} style={{ height: '100vh' }}>
          <Switch>
            {/* <Route path={`${this.props.match.path}/formdemo`} component={FormDemo} /> */}
            <Route path={`${this.props.match.path}/formdemo`} render={(props)=>{
              return (<div className="form-content"><Form {...props}/></div>)
            }} />
            <Route path={`${this.props.match.path}/onblurdemo`} render={(props)=>{
              return (
              <div className="form-content">
                <OnBlurDemo {...props} wrappedComponentRef={(form)=>{
                  this.formRef=form
                }}/><br></br>
                <Button onClick={()=>{console.log(this.formRef.props.form.getFieldsValue())}}>click</Button>
              </div>)
            }} />
            
          </Switch>
        </Col>
      </Row>
    );
  }
}
