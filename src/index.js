import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <App />
    </React.StrictMode>
    </Router>,
  document.getElementById('root')
);

reportWebVitals();
