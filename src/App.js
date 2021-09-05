/** @format */
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./features/Login";
import Header from "./features/Header";
import { auth, db } from "./features/firebase";
import { useDispatch } from "react-redux";
import { userinfo, movies } from "./features/reducer";
import Body from "./features/Body";
import Filmtemplate from "./features/Filmtemplate";
import Loading from "./features/Loading";
function App() {
  const [loading, setLoading] = useState(false);


  //console.log(props.props.r.new);

      const dispatch = useDispatch();

  useEffect(() => {
      var list = [];

    const getdata = async () => {
      try {
        setLoading(true);
        const res = await db.collection("Movies").get();
        res.forEach((doc) => {
          list.push(doc.data());
        });
        list.map((i) => dispatch(movies(i)));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    auth.onAuthStateChanged((i) => {
      if (i) {
        return dispatch(userinfo(i.photoURL));
      } else {
        return dispatch(userinfo());
      }
    });
    getdata();
  }, [dispatch]);

  return (
    <div className="App">
      <Loading visible={loading}>
        <Router>
          <Header />{" "}
          <Switch>
            <Route path="/filminfo">
              <Filmtemplate />
            </Route>
            <Route path="/home">
              <Body />
            </Route>
            <Route path="/">
              {" "}
              <Login />
            </Route>
          </Switch>
        </Router>
      </Loading>
    </div>
  );
}

export default App;
