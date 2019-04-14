import React from "react";
import { Link, Route,Switch } from "react-router-dom";
import Product from "./product";
import { Button, Nav, Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import About from './about'
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
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
          <Col md={3}>
            <Nav defaultActiveKey="" className="flex-column">
              <Nav.Link href="">Active</Nav.Link>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={9}>
              <Switch>
                <Route path={`${match.path}/about`} component={About}></Route>
                <Route path={`${match.path}/product`} component={Product}></Route>
              </Switch>
          </Col>
        </Row>

        <Button onClick={() => this.logOut()}>登出</Button>
      </div>
    );
  }
}
