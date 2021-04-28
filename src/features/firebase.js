/** @format */
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import movies from "./../Movies/moviesinfo.json";

firebase.initializeApp({
  apiKey: "AIzaSyBAAsMGVo49xid8TvBqdREjoWtVyzGSMng",
  authDomain: "disney-clone-c247d.firebaseapp.com",
  projectId: "disney-clone-c247d",
  storageBucket: "disney-clone-c247d.appspot.com",
  messagingSenderId: "252977267014",
  appId: "1:252977267014:web:17b725460024381e1e6547",
  measurementId: "G-GPNWDELV3L",
});

const auth = firebase.auth();
const google = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();
for (let i in movies.movies) {
  db.doc(`Movies/${movies.movies[i].title}`)
    .set(movies.movies[i])
    .then(() => console.log("done"))
    .catch(() => "no");
}

export { auth, google, db };
