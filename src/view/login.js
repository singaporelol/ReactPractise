import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  loginClick = () => {
    axios
      .get("/api/GetUserAuth", {
        params: {
          name: "admin",
          password: "123"
        }
      })
      .then(result => {
        console.log(result);
        sessionStorage.setItem(
          "APP_LOGIN_USER",
          JSON.stringify(result.data.userinfo)
        );
        localStorage.removeItem("USER_MENU");
        localStorage.setItem("USER_MENU", result.data.userMenu);
        console.log(this.props);
        let lastLocation = JSON.parse(sessionStorage.getItem("APP_LAST_URL"));
        if (lastLocation) {
          sessionStorage.removeItem("APP_LAST_URL");
          this.props.history.push(lastLocation);
        }
        this.props.history.push("/app");
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        login
        <hr />
        <button onClick={() => this.loginClick()}>登录</button>
      </div>
    );
  }
}
