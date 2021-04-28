/** @format */
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./features/Login";
import Header from "./features/Header";
import { auth, db } from "./features/firebase";
import { connect, useDispatch, useSelector } from "react-redux";
import { userinfo, movies, info } from "./features/reducer";
import Body from "./features/Body";

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
          console.log("done");
        });
        list.map((i) => dispatch(movies(i)));
      });
  });

  return (
    <div className="App">
      <Router>
        {" "}
        <Switch>
          <Route path="/home">
            {" "}
            <Header />
            <Body />
          </Route>
          <Route path="/">
            {" "}
            <Header />
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
