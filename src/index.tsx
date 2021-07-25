import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import sendToGoogleAnalytics from "./analytics";

ReactGA.initialize('UA-202531800-1');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(sendToGoogleAnalytics);
