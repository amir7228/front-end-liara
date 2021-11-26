import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import ImageIcon from "@mui/icons-material/Image";
import { Button } from "@mui/material";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__up">
        <div className="footer__left">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            accusantium culpa,
          </p>
          <div className="footer__lefticon">
            <TwitterIcon />
            <InstagramIcon />
            <FacebookSharpIcon />
          </div>
        </div>
        <div className="footer__middle">
          <h2>Recent</h2>
          <div className="footer__middleimage">
            <ImageIcon />
            <ImageIcon />
            <ImageIcon />
            <ImageIcon />
          </div>
          <div className="footer__middleimage">
            <ImageIcon />
            <ImageIcon />
            <ImageIcon />
            <ImageIcon />
          </div>
        </div>
        <div className="footer__right">
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor consectetur lorem.</p>
          <p> ipsum dolor sit amet consectetur lorem..</p>
          <p>Lorem ipsum amet consectetur retar.</p>
          <p>Lorem dolor sit amet consectetur.</p>
        </div>
      </div>
      <div className="footer__down">
        <div className="footer__downleft">
          <p>loading</p>
        </div>
        <div className="footer__downright">
          <Button>Work</Button>
          <Button>Service</Button>
          <Button>ABOUT</Button>
          <Button>BLOG</Button>
          <Button>COMPANY</Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
