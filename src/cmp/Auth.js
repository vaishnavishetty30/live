import React, { Component } from "react";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      isRegister: false,
    };
  }
  login() {
    alert("welcome");
  }
  Register(){

  }
  render() {
    return (
      <div>
        {!this.state.isRegister ? (
          <div class="center">
              <h1>Login</h1>
            <input  type="text" id="file"
             placeholder="Email"
              onChange={(e) => {this.setState({ email: e.target.value })}}
            /><br /><br />
            <input type="text" id="file"
             placeholder="Password"
              onChange={(e) => {this.setState({ password: e.target.value })}}
            /><br /><br />
            <button class="btn2" onClick={() => this.login()}>LOGIN</button>
            <button class="button2" onClick={() => this.setState({ isRegister: true })}>
              REGISTER
            </button>
          </div>
        ) : (
          <div class="mydiv">
              <h1>Registration</h1>
            <input type="text"placeholder="Name"
              onChange={(e) => {this.setState({ name: e.target.value })}}
            /><br /><br />
            <input type="text" placeholder="Email"
              onChange={(e) => {this.setState({ email: e.target.value })}}
            /><br /><br />
            <input type="text"placeholder="Contact Number"
              onChange={(e) => {this.setState({ contact_num: e.target.value })}}
            /><br /><br />
            <input type="text"placeholder="Password"
              onChange={(e) => {this.setState({ password: e.target.value })}}
            /><br /><br />
            <input type="text"placeholder="Confirm Password"
              onChange={(e) => {this.setState({ c_password: e.target.value })}}
            /><br /><br />
            <button class="btn" onClick={() => this.Register()}>Register</button>
            <button class ="button1" onClick={() => this.setState({ isRegister: false })}>
              Go to Login
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default Auth;
