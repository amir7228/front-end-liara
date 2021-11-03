import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
function Header() {
  return (
    <>
      <head>
        <link rel="stylesheet" type="text/css" href="/css/Header.css" />
      </head>
      <body className="bodyy">
        <div className="headerr">
          <div className="headerr__right">
            <p>اکانت من</p>
          </div>
          <div className="headerr__left">
            <div className="headerr__option">
              <AccountCircleOutlinedIcon />
            </div>
            <div className="headerr__option">اکانت من</div>
            <div className="headerr__option">کمک</div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Header;
