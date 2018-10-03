import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Home from './Home'
import firebase from "firebase";

//----Creating the reducers----//
const initialState={newEQCategory:'', newEQname:'',categories:['Radiology','Diagnostics','Rehabilitation','Dental','Microbiology Lab','Surgery','Chemistry Lab','Dialysis'],}

const assetReducer=(state=initialState,action)=>{
  switch (action.type) {
    case 'UPDATE_VALUE':
      return { ...state,
        newEQCategory: action.value};
    case 'UPDATE_EQUIMPMENT_NAME':
        return { ...state,
        newEQname: action.value}
    default:
      return state;
  }
}
//---End of reducers---//
const store =createStore(assetReducer)

export default class App extends Component{
  componentWillMount(){
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
   }
 
  render(){
    return(
      <Provider store={store}>
      <Home />
      </Provider>     
    );
  }
}

