import React from "react";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import { Avatar } from "@mui/material";
import { useState } from "react/cjs/react.development";
import { useRouter } from "next/dist/client/router";
import Header from "../Header";
import Footer from "../Footer";
function Req() {
  const router = useRouter();
  const submit = (e) => {
    e.preventDefault();
  };
  const { time } = router.query;
  const [message, setMessage] = useState("");
  return (
    <div>
      <Header />
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
          <form className="chat" onSubmit={submit}>
            <Avatar src="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s48-c-k-c0x00ffffff-no-rj" />
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
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
            <p>
              ها و متون بلکه روزنامه و مجله لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
              صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه
              روزنامه و مجله
            </p>
            <p>
              اپگرها و متون بلکه روزنامه و مجله لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
              صنعت
            </p>
          </div>
          <div className="request__rightbutton">
            <button>پرداخت</button>
            {time}
            <FlagOutlinedIcon />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Req;
