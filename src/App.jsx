import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import Home from "./cmp/Home";
import Listing from "./cmp/Listing";
import About from "./cmp/About";
import Protected from "./cmp/Protected";
import Nav from "./cmp/Nav";


import Auth from "./cmp/Auth";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        < Nav />
        <Switch>
          <Route path="/about"> 
           <Protected cmp={About} />
          </Route>
          <Route path="/home">
          <Protected cmp={Home} />
          </Route>
          <Route path="/list">
          <Protected cmp={Listing} />
          </Route>
          <Route path="/">
            <Auth />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
