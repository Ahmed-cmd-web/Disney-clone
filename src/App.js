/** @format */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from './features/Login'
import Header from "./features/Header";

function App() {
  return (
    <div className="App">
      <Router>
        {" "}
        <Header />
        <Switch>
          <Route path='/home'></Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
