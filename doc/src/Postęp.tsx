import React from 'react';
import './index.css';
import './ipz.css';
import * as ipz from './Components';
import {App} from './App';

function GetDateHeader(day: number, month: number, year: number) {
  const date = new Date(year, month, day);
  return (
  <ipz.Header>
    {date.getDay()}/{date.getMonth()}/{date.getFullYear()}
    </ipz.Header>
    );
}

export function Postęp(){
  return (
    <App>
        <ipz.Title>
          Postęp nad projektem
          </ipz.Title>

    {GetDateHeader(5, 11, 2025)}
    <ipz.BulletParagraph>
        <span> Lavy - Strona</span>
        <span> Artemi - konfiguracja serwera SSH i wykonywanie połączeń</span>
        <span> Kosma - Instalacja Proxmox </span>
        <span> Bartek - Research na temat exploitów SSH </span>
    </ipz.BulletParagraph>
    </App>
  );
}
