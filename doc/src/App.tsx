import React from 'react';
import testImage from './byczek.png';
import './index.css';
import * as ipz from './Components';

function App() {
  return (
    <div className="App">
      <ipz.Overlay/>
      <div className="Body">

        <ipz.Title >
            ipz
            <ipz.PageDate date={new Date(2025, 11, 5, 19, 49)}/>
        </ipz.Title>
        <ipz.Header>
            Reference
        </ipz.Header>
        <ipz.Paragraph>
            test
        </ipz.Paragraph>
        <ipz.Paragraph>
          <span className="Bullet">&#9679;</span>
          <ipz.Link path={"/history"} text={"Postęp"}/>
        </ipz.Paragraph>
        <ipz.Header>jakis header bla bla</ipz.Header>
        <ipz.Paragraph>tera pokaze jak sformatować komputer</ipz.Paragraph>
        <ipz.Image path={testImage} caption={"none"} />
        <ipz.Code lang={'bash'}>
          $ echo YOLO!! \
          $ sudo rm -rf ./
        </ipz.Code>
      </div>
    </div>
  );
}

export default App;
