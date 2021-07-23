import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
    <>
    <h1 style={{backgroundColor:"lightblue"}}>HELLO,WELCOME!!</h1>
      <div>
        <Link to="Home">Home</Link>
        <Link to="About">About</Link>
        <Link to="list">Contact Us</Link>
        <Link to="/">Login</Link>
      </div>
    </>  
    );
  }
}
export default Nav;
