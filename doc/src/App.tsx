import React, { ReactNode } from 'react';
import './index.css';
import * as ipz from './Components';

export function Index() {
  return (
    <App>
    <ipz.Title >
        ipz
        </ipz.Title>

        <ipz.Header> Reference </ipz.Header>

        <ipz.BulletParagraph>
          <ipz.Link path={"/postęp"} text={"Postęp"}/>
          <ipz.Link path={"/dokumentacja"} text={"Dokumentacja"}/>
          <ipz.Link path={"https://github.com/lavycasm/ipz"} text={"GitHub"}/>
        </ipz.BulletParagraph>
      </App>
  );
}

export function App(app: { children: ReactNode }) {
  return (
    <div className="App">
      <ipz.Overlay/>
      <div className="Body">
        {app.children}
      </div>
    </div>
  );
}

export default App;
