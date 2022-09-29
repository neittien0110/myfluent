import React from 'react';
import './App.css';
/** Bổ sung Layout ms-Grid bằng cách cài gói npm install office-ui-fabric-react, hoặc bổ sung css trực tiếp vào html */
import 'office-ui-fabric-react/dist/css/fabric.css'
import Navigation from './Navigation';
import { CardsSection } from './CardsSection';
import { OperationsTable } from './OperationsTable';

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
          <div className={"ms-Grid-col ms-sm6 ms-md8 ms-lg10"}>
             <h1>Card tóm tắt thông tin</h1>
             {/**  Hiện các card thông tin */}
            <CardsSection/>
            {/**  Hiện bảng dữ liệu */}
            <OperationsTable/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
