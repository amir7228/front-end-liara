import React from "react";

function Sidebarrow({ Icon, title }) {
  return (
    <>
      <head>
        <link rel="stylesheet" type="text/css" href="/css/Sidebarrow.css" />
      </head>
      <body>
        <div className="sidebarrow">
          <Icon />
          <p>{title}</p>
        </div>
      </body>
    </>
  );
}

export default Sidebarrow;
