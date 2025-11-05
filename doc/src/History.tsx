import React from 'react';
import './index.css';
import './ipz.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import * as ipz from './Components';

export default function History(){
  return (
    <div className="App">
      <div id="overlay"></div>
      <div className="Body">
        <ipz.PageDate date={new Date(2025, 11, 5, 19, 49)}/>
        <ipz.Title>Historia</ipz.Title>
      </div>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
