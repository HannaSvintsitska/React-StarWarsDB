import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const getResource = async (url) => {
  const res = await fetch(url);
  const body = await res.json();
  return body;
}

getResource('https://swapi.dev/api/people/1/')
  .then((body) => {
    console.log(body);
  })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

