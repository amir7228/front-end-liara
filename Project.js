import React from "react";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { useRouter } from "next/dist/client/router";

function Project({ time, price }) {
  const router = useRouter();
  const searchForReq = () => {
    router.push({
      pathname: "/Req",
      query: {
        time: { time },
      },
    });
  };
  return (
    <div className="project" onClick={() => router.push("/Req")}>
      <h3>عنوان</h3>
      <hr />
      <div className="project__container">
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپ و با استفاده از طراحان گرافیک است
        </p>
        <div className="job__options">
          <div className="job__option">
            <MonetizationOnOutlinedIcon />
            <p>{price}</p>
          </div>
          <div className="job__option">
            <CalendarTodayOutlinedIcon />
            <p>{time}</p>
          </div>
          {/* <div className="job__option"> */}
          {/* <button onClick={searchForReq}>مشاهده</button> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Project;
