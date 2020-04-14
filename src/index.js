import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//added for import the styles
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux' ;
import Reducer from './reducer/reducer';
import {combineReducers, createStore} from "redux";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import SearchDoctorPages from "./PatientPages/serachDoctor/searchDoctorPages";


const store = createStore(combineReducers(Reducer));

ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
            <Route exact path='/' component={App}/>
            <Route exact path='/searchDoctor' component={SearchDoctorPages}/>
        </BrowserRouter>
        {/*<App/>*/}
      </Provider>,
  document.getElementById('root')
);