import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCs73vCQfZE8Ode6gr7SYOr70vcORGNJBw",
    authDomain: "danieliwuproject.firebaseapp.com",
    databaseURL: "https://danieliwuproject.firebaseio.com",
    projectId: "danieliwuproject",
    storageBucket: "danieliwuproject.appspot.com",
    messagingSenderId: "491705154273"
  }
 if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}
export default Firebase;