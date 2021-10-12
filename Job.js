import React, { useState } from "react";
import Project from "./Project";
import { useRouter } from "next/dist/client/router";

function Job() {
  const [searchInput, setSearchInput] = useState("");
  const [descriptinInput, setDescriptionInput] = useState("");
  const [file, setFile] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();
  const Send = (e) => {
    e.preventDefault();
  };
  return (
    <div className="job">
      <div className="job__left">
        <p className="job__title">ایجاد شغل جدید</p>
        <hr />
        <form className="form">
          <div className="categories">
            <ul>
              <li>
                دسته یک
                <ul>
                  <li>زیر دسته</li>
                  <li>زیر دسته</li>
                  <li>زیر دسته</li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                دسته دو
                <ul>
                  <li>زیر دسته</li>
                  <li>زیر دسته</li>
                  <li>زیر دسته</li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                دسته سه
                <ul>
                  <li>زیر دسته</li>
                  <li>زیر دسته</li>
                  <li>زیر دسته</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="job__input">
            <div className="input__top">
              <h3>عنوان</h3>
              <hr />
              {searchInput}
              <input
                type="text"
                valu={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <div className="input__middle">
              <h3>توضیحات</h3>
              <hr />
              <input
                type="text"
                value={descriptinInput}
                onChange={(e) => setDescriptionInput(e.target.value)}
              />
            </div>
            <div className="input__bottom">
              <input
                type="file"
                value={file}
                onChange={(e) => setFile(e.target.value)}
              />
            </div>
            <div className="input__bottom2">
              <input
                type="text"
                placeholder="فرصت انجام کار"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
              <input
                type="text"
                placeholder="قیمت را وارد کنید"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="submit">
              <button onClick={Send} className="btn">
                ارسال کن
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="job__right">
        <p className="job__title"> لیست شغل ها</p>
        <hr />

        <Project des="" price="سه میلیون تومان" time="هفت روز" />
        <Project des="" price="پانصد هزار تومان" time="شش روز" />
        <Project des="" price="دو میلیون تومان" time="پنج روز" />
        <Project des="" price="یک میلیون تومان" time="ده روز" />
      </div>
    </div>
  );
}

export default Job;
