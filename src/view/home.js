import React from "react";
import { Route, Switch } from "react-router-dom";
import Product from "./product";
import { Nav, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {Button} from 'antd'
import About from "./about";
import menuList from "./../resource/menuConfig.js";
import Content from "./auth/content";
import Count from "../components/laoma/count";
import Userlist from "../components/laoma/userlist";
import Parent from "../components/laoma/parent";
import NewCount from "../components/laoma/react-redux/NewCount";
import Auth from "../pages/auth/auth"

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
          <LinkContainer to={`${match.path}/auth`}>
            <Nav.Link eventKey="3">后台权限管理系统</Nav.Link>
          </LinkContainer>
          <LinkContainer to={`${match.path}/about`}>
            <Nav.Link eventKey="4">关于</Nav.Link>
          </LinkContainer>
        </Nav>
        <Switch>
          <Route path={`${match.path}/auth`} component={Auth}/>
          <Route
            path={`${match.path}`}
            render={props => {
              console.log(props);
             return <Row>
                <Col xs={3}>
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
                    <Button type="primary" onClick={() => this.logOut()}>登出</Button>
                  </Nav>
                </Col>
                <Col xs={9}>
                  <Switch>
                    <Route path={`${match.path}/about`} component={About} />
                    <Route path={`${match.path}/product`} component={Product} />
                    <Route path={`${match.path}/content`} component={Content} />
                    <Route path={`${match.path}/rich`} component={Count} />
                    <Route path={`${match.path}/parent`} component={Parent} />
                    <Route
                      path={`${match.path}/newcount`}
                      component={NewCount}
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
