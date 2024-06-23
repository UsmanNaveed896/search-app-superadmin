import React from "react";
import Img from "../../assets/search-normal.png";
import Img1 from "../../assets/message-text.png";
import Img2 from "../../assets/Group 7.png";
import Img3 from "../../assets/Group 8.png";
import Img4 from "../../assets/Group143.png";

const Header = () => {
  return (
    <div className="flex justify-end fixed top-0 w-full">
      <div className="container max-w-[1300px] px-8">
        <div className="flex justify-between gap-3 items-center">
          <div className="flex gap-6 items-center">
            <h1 className="font-bold">Dashboard</h1>
            <div>
              <input
                className="rounded-full  border border-black  py-2 px-12"
                placeholder="Search"
                type="text"
              />
              <img className="mt-[-30px] ml-[240px]" src={Img} alt="abc" />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="px-3 py-2 rounded bg-white shadow">
              <img src={Img1} alt="abc" />
            </div>
            <div className="px-3 py-2 rounded bg-white shadow">
              <img src={Img2} alt="abc" />
            </div>
            <div>
              <img className="h-9" src={Img3} alt="abc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
