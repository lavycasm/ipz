import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ipz.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';


import {Index} from './App';
import {Postęp} from './Postęp';
import {Dokumentacja} from './Dokumentacja';
import {DocStrona, DocCTF, DocHardware, DocPorty, DocSerwery} from './Dokumentacja';

// hack zeby dzialalo tez na githubie
function makeRoute(path: string, element: React.ReactNode) {
  return (
    <>
      <Route path={path} element={element} />
      <Route path={"/ipz" + path} element={element} />
    </>
  );
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {makeRoute("/", <Index />)}
        {makeRoute("/postęp", <Postęp />)}
        {makeRoute("/dokumentacja", <Dokumentacja />)}
        {makeRoute("/dokumentacja/strona", <DocStrona />)}
        {makeRoute("/dokumentacja/ctf", <DocCTF />)}
        {makeRoute("/dokumentacja/hardware", <DocHardware />)}
        {makeRoute("/dokumentacja/porty", <DocPorty />)}
        {makeRoute("/dokumentacja/serwery", <DocSerwery />)}
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
