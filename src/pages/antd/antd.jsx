import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Row, Col } from 'antd';
import FormDemo from './components/FormDemo';
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
            </ul>
          </div>
        </Col>
        <Col xs={18} style={{ height: '100vh' }}>
          <Switch>
            <Route path={`${this.props.match.path}/formdemo`} component={FormDemo} />
            {/* <Route
                      path={`${match.path}/userlist`}
                      component={Userlist}
                    /> */}
          </Switch>
        </Col>
      </Row>
    );
  }
}
