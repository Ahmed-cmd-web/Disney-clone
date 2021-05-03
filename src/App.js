/** @format */
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./features/Login";
import Header from "./features/Header";
import { auth, db } from "./features/firebase";
import {  useDispatch } from "react-redux";
import { userinfo, movies } from "./features/reducer";
import Body from "./features/Body";
import Filmtemplate from './features/Filmtemplate'
function App() {
  var list = [];
  
  
  const dispatch = useDispatch();

  //console.log(props.props.r.new);

  useEffect(() => {
    auth.onAuthStateChanged((i) => {
      if (i) {
        return dispatch(userinfo(i.photoURL));
      } else {
        return dispatch(userinfo());
      }
    });
    db.collection("Movies")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
          
        });
        list.map((i) => dispatch(movies(i)));
      });
  });
 
  return (
    <div className="App">
      <Router>
        <Header />{" "}
        <Switch>
          <Route path='/filminfo'>
            <Filmtemplate />
          </Route>
          <Route path="/home">
            {" "}
            <Body />
          </Route>
          <Route path="/">
            {" "}
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
