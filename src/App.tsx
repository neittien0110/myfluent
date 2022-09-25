import React from 'react';
import './App.css';
/** Bổ sung Layout ms-Grid bằng cách cài gói npm install office-ui-fabric-react, hoặc bổ sung css trực tiếp vào html */
import 'office-ui-fabric-react/dist/css/fabric.css'
import Navigation from './Navigation';

function App() {
  return (
    <>
      <div className="ms-Grid" dir="ltr">
        <div className={"ms-Grid-row"}>
          {/**  Khu vực cho thanh menu phải */}
          <div className={"ms-Grid-col ms-sm1 ms-md2 ms-lg2"}>
            <Navigation />
          </div>
          {/**  Khu vực không bao gồm menu phải */}
          <div className={"ms-Grid-col ms-sm6 ms-md8 ms-lg10"}>Nội dung chính</div>
        </div>
      </div>
    </>
  );
}

export default App;
