import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Home from './Home'

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
  render(){
    return(
      <Provider store={store}>
      <Home />
      </Provider>     
    );
  }
}