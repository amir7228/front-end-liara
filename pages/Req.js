import React from "react";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import { Avatar, Button } from "@mui/material";
import { useState } from "react/cjs/react.development";
import { useRouter } from "next/dist/client/router";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Header from "../Header";
import Footer from "../Footer";
import SendIcon from '@mui/icons-material/Send';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
function Req() {
  const router = useRouter();
  const submit = (e) => {
    e.preventDefault();
  };
  const { time } = router.query;
  const [message, setMessage] = useState("");


  const [file, setFile] = useState("");
  return (
    <div >
      {/* <Header /> */}
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="request">
        <div className="request__left">
          <div className="request__leftheader">
            <div className="avatar">
              <Avatar src="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s48-c-k-c0x00ffffff-no-rj" />
            </div>
            <div className="request__leftinfo">
              <h5>محمد محمدی</h5>
              <p>آنلاین</p>
            </div>
          </div>
          <div className="chat__first" >
            <Avatar src="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s48-c-k-c0x00ffffff-no-rj" />
            <p>سلام</p>

          </div>
          <div className="chat__second" >
            <p> تسنش  ستیسم سمیکشس مسئشکسمی سمئطسلام</p>
            <Avatar src="https://yt3.ggpht.com/cb6holW0DAVnS25D6WlT2D_mm4sGOOZlojOJeGBRn0rrIn6bJ-Nmnx6y-2dWzzxEX7s_V6Zpqw=s48-c-k-c0x00ffffff-no-rj" />


          </div>
          <div className="chat__first" >
            <Avatar src="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s48-c-k-c0x00ffffff-no-rj" />
            <p>Lorem ipsum dolor sit </p>

          </div>

          <div className="chat__second" >
            <p>Lorem ipsum dolor sit.</p>
            <Avatar src="https://yt3.ggpht.com/cb6holW0DAVnS25D6WlT2D_mm4sGOOZlojOJeGBRn0rrIn6bJ-Nmnx6y-2dWzzxEX7s_V6Zpqw=s48-c-k-c0x00ffffff-no-rj" />


          </div>

          <form className="chattt" onSubmit={submit}>
            <div className="input-chat">
              <input
                className="chattt-input"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <SendIcon />

            </div>

            <div className="input__bottom">
              <input
                className="input__file"
                type="file"
                value={file}
                id="first"
                onChange={(e) => setFile(e.target.value)}
              />
              <p>برای انتخاب فایل ضربه بزنید</p>
              <label htmlFor="first">
                <FileUploadOutlinedIcon />
              </label>
            </div>
          </form>
        </div>

        <div className="request__right">
          <p className="request__title">طراحی سایت</p>
          <hr />
          <div className="request__rightcontent">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است و چ چاپ و با استفاده از طراحان گرافیک است و چاپگر
            </p>

          </div>
          <div className="request__rightbutton">
            <button>پرداخت</button>
            <p>پانصد هزار تومان</p>

            <FlagOutlinedIcon />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Req;
