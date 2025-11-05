import React from 'react';
import './index.css';
import './ipz.css';
import './App';
import * as ipz from './Components';
import { App } from './App';
import RoutingStrony from './imgs/routing_strony.png';

export function Dokumentacja(){
  return (
    <App>
        <ipz.Title>
            Dokumentacja
        </ipz.Title>
        <ipz.BulletParagraph>
            <ipz.Link path={"/dokumentacja/strona"} text={"Strona"}/>
            <ipz.Link path={"/dokumentacja/serwery"} text={"Serwery"}/>
            <ipz.Link path={"/dokumentacja/ctf"} text={"CTF"}/>
            <ipz.Link path={"/dokumentacja/hardware"} text={"Hardware"}/>
            <ipz.Link path={"/dokumentacja/porty"} text={"Porty"}/>
        </ipz.BulletParagraph>
    </App>
  );
}

export function DocStrona() {
  const page = "https://lavycasm.github.io/ipz"
  const nazwa = "{Nazwa}";

  return (
  <App>
    <ipz.Title>
        Dokumentacja Strony
      <ipz.PageDate date={new Date(2025, 11, 5)}/>
    </ipz.Title>
    <ipz.Paragraph>
      Aktualna strona powinna być dostępna na 
      <ipz.Link path={page} text={page}/>
    </ipz.Paragraph>

    <ipz.Header>
      Lokalnie
    </ipz.Header>

    <ipz.Paragraph>
      Wymagania: 
      <ipz.Link
       path={"https://nodejs.org/en/download/"}
       text={"Node.js / npm"}
       />
    </ipz.Paragraph>
    <ipz.Code lang='bash'>
      {`
      git clone https://lavycsm.github.io/ipz.git
      cd ipz/doc
      npm install
      npm start
      `}
    </ipz.Code>
    <ipz.Paragraph>
      to zajmie z tak 2 minuty i 
      jeżeli wszystko poszło git to strona powinna
      automatycznie się otworzyć, ale jeżeli nie to
      wbij na
      <span style={{color: "pink"}}> http://localhost:3000 </span>
    </ipz.Paragraph>


    <ipz.Header>
      Dodawanie własnych stron
    </ipz.Header>
    <ipz.Paragraph>
      żeby machnąć własną stronke czy coś to najpierw 
      trzeba zrobić jakiś nowy plik <br/>{nazwa}.tsx w folderze /doc/src
    </ipz.Paragraph>
      <ipz.Paragraph>
      tera jak to mamy to trzeba dodać routing do tej strony
      w src/index.tsx
      <br/>
      </ipz.Paragraph>
      <ipz.Image 
        path={RoutingStrony} 
        style={{width: "40%"}}
        />
      <ipz.Paragraph>
      no i tera trzeba zrobić funkcje dla tej strony, 
      wbijasz do {nazwa}.tsx i tam robisz na przyklad <br/>
      </ipz.Paragraph>
      <ipz.Code lang='tsx'> 
        {`
        export function Nazwa(){
          return (
            <App>
                <ipz.PageDate date={new Date(2025, 11, 5, 19, 49)}/>
                <ipz.Title>Nazwa</ipz.Title>
            </App>
          );
        }
        `}
      </ipz.Code>
      <ipz.Paragraph>
        tera robisz import tej funkcji jak na
        pierwszym obrazku i powinno smigac
      </ipz.Paragraph>

    <ipz.Header>
      Funkcje
    </ipz.Header>
    <ipz.Paragraph>
        todo
    </ipz.Paragraph>

  </App>
  );
}

export function DocSerwery() {
  return (
  <App>
    <ipz.Image style={{width: "25%"}} path="https://cdn.discordapp.com/attachments/1421873504726421688/1429001576214823012/RDT_20251018_0744414459480034184962824.jpg?ex=690c47ed&is=690af66d&hm=4c582d9f40ae769bf210c765570c107915a66a7eef9662200def46239c78aceb&"/>
  </App>
  );
}

export function DocCTF() {
    return (
  <App>
    <ipz.Image style={{width: "25%"}} path="https://cdn.discordapp.com/attachments/1421873504726421688/1428831722006380595/image0.png?ex=690c527c&is=690b00fc&hm=572ae6ec2591d2c06b169c6dd7b24ae7a9fd82375ee3bcf28342c1514fe8ffc7&"/>
  </App>
  );
}

export function DocHardware() {
  return (
  <App>
  <ipz.Image style={{width: "25%"}} path="https://cdn.discordapp.com/attachments/1421873504726421688/1428825376804704499/Screenshot_20251017_162755_Reddit.jpg?ex=690c4c94&is=690afb14&hm=90a271cf10788b6bbdb8e2a88d134ba464c40a8d6ac95b669e7d04a5fadef6b0&"/>
  </App>
  );
}

export function DocPorty() {
  return (
  <App>
  <ipz.Image style={{width: "25%"}} path="https://cdn.discordapp.com/attachments/1421873504726421688/1428688209218506802/image0.jpg?ex=690c7594&is=690b2414&hm=c22ba5c587c8ff99997009db8c6993919990a97fc9b73dde1126e597621ab562&"/>
  </App>
  );
}
