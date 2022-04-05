import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DarkmodeContextProvider} from './context/darkmodeContext';
import './interceptors/axios'
ReactDOM.render(
    <DarkmodeContextProvider>
    <App  />
    </DarkmodeContextProvider>
  ,
  document.getElementById('root')
);


reportWebVitals();
