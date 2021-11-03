import React from "react";
import Header from "./Header";
import Homee from "./Homee";
import Sidebar from "./Sidebar";

function Mypage() {
  return (
    <>
      <head>
        <link rel="stylesheet" type="text/css" href="/css/Mypage.css" />
      </head>
      <body className="mypage">
        <Header />
        <div className="content">
          <Sidebar />
          <Homee />
        </div>
      </body>
    </>
  );
}

export default Mypage;
