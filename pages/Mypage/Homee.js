import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Homee() {
  return (
    <>
      <head>
        <link rel="stylesheet" type="text/css" href="/css/Home.css" />
      </head>
      <body className="homee">
        <div className="home__1">
          <div className="home__1right">
            <AccountCircleOutlinedIcon />
            <h3>محمد احمدی</h3>
            <p>پروفایل من</p>
          </div>
          <div className="home__1left">
            <div className="home__option">
              <h2>0</h2>
              <p>درخواست ها</p>
            </div>
            <div className="home__option">
              <h2>0</h2>
              <p>مورد علاقه ها</p>
            </div>
            <div className="home__option">
              <h2>0</h2>
              <p>توکن های من</p>
            </div>
          </div>
        </div>
        <div className="home__2">
          <div className="home__2top">
            <h3>پرسش و پاسخ</h3>
            <div className="home__2topleft">
              <p>دیدن همه</p>
              <p>مشاهده نشده</p>
            </div>
          </div>
          <div className="home__2bottom">
            <h4>پیام جدیدی وجود ندارد</h4>
            <p>
              شما می توانید پیغام های قبلی خود را در بخش پرسش و پاسخ ببینید{" "}
            </p>
            <button>به بخش پیغام ها برو</button>
          </div>
        </div>
        <div className="home__2">
          <div className="home__2top">
            <h3>سفارش ها</h3>
            <div className="home__2topleft">
              <p>دیدن همه</p>
              <p>مشاهده نشده</p>
            </div>
          </div>
          <div className="home__2bottom">
            <h4>سفارشی ثبت نشده است</h4>
            <p>پس از ثبت سفارش تضمین تجارت، وضعیت را در اینجا بررسی کنید.</p>
            <button>به بخش پیغام ها برو</button>
          </div>
        </div>
        <div className="home__2">
          <div className="home__2top">
            <h3>پیشنهاد ها</h3>
            <div className="home__2topleft">
              <p>دیدن همه</p>
              <p>مشاهده نشده</p>
            </div>
          </div>
          <div className="home__2bottom">
            <h4>پیشنهادی ثبت نشده </h4>
            <p>شما می توانید پیغام های قبلی خود را در بخش پرسش و پاسخ ببینید</p>
            <button>شخصی سازی7</button>
          </div>
        </div>
      </body>
    </>
  );
}

export default Homee;
