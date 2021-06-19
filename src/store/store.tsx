import {combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import PeopleReducer from '../reducers/people_reducer';


    // Initialization
const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState') || '{}')
                       : {}


const reducers = combineReducers({
    page : PeopleReducer
});



const store = createStore(reducers, persistedState, compose(applyMiddleware(thunk)));


export type RootSore = ReturnType<typeof reducers>


    // store the data in the local storage
store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  });



    // Clear the local storage
//   window.onunload = () => {
//     window.localStorage.clear()
//  }



export default store;