import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Product from "./product";
import { Button, Nav, Container, Row, Col, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import About from "./about";
import menuList from "./../resource/menuConfig.js"
import Content from './auth/content'
import Count from '../components/laoma/count'
import Userlist from '../components/laoma/userlist'
import NewCount from '../components/laoma/react-redux/NewCount'
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
          <LinkContainer to={`${match.path}/cases`}>
            <Nav.Link eventKey="3">成功案例</Nav.Link>
          </LinkContainer>
          <LinkContainer to={`${match.path}/about`}>
            <Nav.Link eventKey="4">关于</Nav.Link>
          </LinkContainer>
        </Nav>

        <Row>
          <Col xs={3}>
            <Nav
              variant="pills"
              activeKey="1"
              className="flex-column"
            >
              <Nav.Item>
              {
                this.state.menuList.map((item,key)=>{
                  return (
                    <LinkContainer key={item.key} to={`${match.path}${item.key}`}>
                      <Nav.Link>{item.title}</Nav.Link>
                    </LinkContainer>
                  )
                })
              }
              </Nav.Item>
            </Nav>
          </Col>
          <Col xs={9}>
            <Switch>
              <Route path={`${match.path}/about`} component={About} />
              <Route path={`${match.path}/product`} component={Product} />
              <Route path={`${match.path}/content`} component={Content}></Route>
              <Route path={`${match.path}/rich`} component={Count}></Route>
              <Route path={`${match.path}/newcount`} component={NewCount}></Route>
              <Route path={`${match.path}/userlist`} component={Userlist}></Route>
            </Switch>
          </Col>
        </Row>

        <Button onClick={() => this.logOut()}>登出</Button>
      </div>
    );
  }
}
