import React from "react";
import { Route, Switch } from "react-router-dom";
import Product from "./product";
import { Nav, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {Button} from 'antd'
import About from "./about";
import menuList from "./../resource/menuConfig.js";
import Content from "./auth/content";
import Parent from "../components/laoma/parent";
import Context from "../components/laoma/context";
import ParentCallChildMethod from "../components/laoma/parentcallchildmethod";
import Reactdemo from "../components/laoma/reactdemo";
//使用redux来进行计数（没封装action）
import Count from "../redux/count.jsx";
//使用redux来进行计数（封装）
import ReactRedux from "../redux/reactredux";
//使用redux-thunk异步进行（封装）
import Userlist from "../redux/userlist";
//使用react-redux来做计数器（封装）
import ReactReduxCalculator from "../redux/reactreduxcalculator";
//使用react-redux来做userlist增删改查（封装）
import ReactReduxUserlist from "../redux/reactreduxuserlist"
import Auth from "../pages/auth/auth"
import Antd from "../pages/antd/antd"

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      menuList: menuList
    };
  }
  componentDidMount() {
    this.setState();
  }
  logOut = () => {
    sessionStorage.removeItem("APP_LOGIN_USER");
    this.props.history.push("/");
  };
  render() {
    let { match } = this.props;
    return (
      <div>
        <Nav variant="tabs" activeKey="0">
          <LinkContainer to="/app">
            <Nav.Link eventKey="0" href="#">
              <img
                alt="官网图片"
                style={{
                  height: "30px",
                  width: "50px",
                  backgroundColor: "red"
                }}
              />
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/app">
            <Nav.Link eventKey="1">首页</Nav.Link>
          </LinkContainer>
          <LinkContainer to={`${match.path}/product`}>
            <Nav.Link eventKey="2">产品</Nav.Link>
          </LinkContainer>
          <LinkContainer to={`${match.path}/antd`}>
            <Nav.Link eventKey="5">antd</Nav.Link>
          </LinkContainer>
          <LinkContainer to={`${match.path}/auth`}>
            <Nav.Link eventKey="3">后台权限管理系统</Nav.Link>
          </LinkContainer>
          <LinkContainer to={`${match.path}/about`}>
            <Nav.Link eventKey="4">关于</Nav.Link>
          </LinkContainer>
        </Nav>
        <Switch>
          <Route path={`${match.path}/auth`} component={Auth}/>
          <Route path={`${match.path}/antd`} component={Antd}/>
          <Route
            path={`${match.path}`}
            render={props => {
              console.log(props);
             return <Row>
                <Col xs={3} style={{Width:"200px", paddingLeft:"60px", maxWidth:"300px"}}>
                  <Nav variant="pills" activeKey="1" className="flex-column">
                    <Nav.Item>
                      {this.state.menuList.map((item, key) => {
                        return (
                          <LinkContainer
                            key={item.key}
                            to={`${match.path}${item.key}`}
                          >
                            <Nav.Link>{item.title}</Nav.Link>
                          </LinkContainer>
                        );
                      })}
                    </Nav.Item>
                    <Button type="primary" onClick={() => this.logOut()} style={{marginTop:"20px"}}>登出</Button>
                  </Nav>
                </Col>
                <Col xs={9}>
                  <Switch>
                    <Route path={`${match.path}/about`} component={About} />
                    <Route path={`${match.path}/product`} component={Product} />
                    <Route path={`${match.path}/content`} component={Content} />
                    <Route path={`${match.path}/reactreduxuserlist`} component={ReactReduxUserlist} />
                    <Route path={`${match.path}/redux`} component={Count} />
                    <Route path={`${match.path}/reactreduxCalculator`} component={ReactReduxCalculator} />
                    <Route path={`${match.path}/parent`} component={Parent} />
                    <Route path={`${match.path}/context`} component={Context} />
                    <Route path={`${match.path}/parentcallchildmethod`} component={ParentCallChildMethod} />
                    <Route path={`${match.path}/reactdemo`} component={Reactdemo} />
                    <Route
                      path={`${match.path}/reactredux`}
                      component={ReactRedux}
                    />
                    <Route
                      path={`${match.path}/userlist`}
                      component={Userlist}
                    />
                  </Switch>
                </Col>
              </Row>;
            }}
          />
          
        </Switch>

        
      </div>
    );
  }
}
