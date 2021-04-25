/** @format */
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./features/Login";
import Header from "./features/Header";
import { auth } from "./features/firebase";
import { useDispatch } from "react-redux";
import { userinfo } from "./features/reducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((i) => {
      if (i) {
        return dispatch(userinfo(i.photoURL));
      } else {
        return dispatch(userinfo());
      }
    });
  });

  return (
    <div className="App">
      <Router>
        {" "}
        <Header />
        <Switch>
          <Route path="/home"></Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
