import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DarkmodeContextProvider} from './context/darkmodeContext';
ReactDOM.render(
  <React.StrictMode>

    <DarkmodeContextProvider>
    <App  />

    </DarkmodeContextProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
