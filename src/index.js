import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const BASE_ID = process.env.REACT_APP_BASE_ID;
const TABLE_ID_OCTOBER = process.env.REACT_APP_TABLE_ID_OCTOBER;

console.log("test1 API Key:", AIRTABLE_API_KEY);
console.log("Base ID:", BASE_ID);
console.log("Table ID:", TABLE_ID_OCTOBER);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
