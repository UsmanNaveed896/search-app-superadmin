import React, { useEffect, useState } from "react";
import Img4 from "../assets/Group143.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./style.css";

const Drawer = () => {
  const navigate=useNavigate()
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [selectedLink, setSelectedLink] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handlePageSwitch = (link) => {
    setSelectedLink(link);
    if (link == "virtualoffice") {
      setShowDropdown(!showDropdown);
    }
  };

  const handleLogout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('user_id');
    navigate('/login')
  }

  return (
    <>
      {/* {loading ? (
        <SplashScreen />
      ) : ( */}
      <div className={`flex h-screen ${drawerOpen ? "overflow-y-scroll" : ""}`}>
        {/* Drawer */}
        <div
          className={`fixed top-0 left-0 h-full shadow-xl overflow-y-scroll  text-white w-64 transition-transform transform ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className=" px-6 pb-3 pt-5 bg-[#f6faff] ">
            <div className="flex justify-center items-center gap-2">
              <div className="column1 py-4 pl-3 ">
                <img className="h-12" src={Img4} alt="search" />
              </div>
            </div>
            <h1 className="text-[14px] mb-4 text-[#757575]  mt-4">Main</h1>
            <ul>
              <Link to="/dashboard">
                <li
                  className={`cursor-pointer  ${
                    selectedLink === "dashboard" ? "font-bold" : ""
                  } ${
                    selectedLink === "dashboard"
                      ? "text-[#295DFA]"
                      : "text-[#94AEFF]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("dashboard")}
                >
                  <div className="flex justify-start items-center gap-4">
                    <i class="fa fa-area-chart" aria-hidden="true"></i>
                    <h1 className="text-[16px]">Dashboard</h1>
                  </div>
                </li>
              </Link>
              <Link to="/user">
                <li
                  className={`cursor-pointer ${
                    selectedLink === "profile" ? "font-bold" : ""
                  } ${
                    selectedLink === "profile"
                      ? "text-[#295DFA]"
                      : "text-[#94AEFF]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("profile")}
                >
                  <i
                    class={`fa fa-user mr-3 ${
                      selectedLink === "profile"
                        ? "text-[#295DFA]"
                        : "text-[#94AEFF]"
                    } text-[16px]`}
                    aria-hidden="true"
                  ></i>{" "}
                  User
                </li>
              </Link>

              <Link to="/livestream">
                <li
                  className={`cursor-pointer  ${
                    selectedLink === "golive" ? "font-bold" : ""
                  } ${
                    selectedLink === "golive"
                      ? "text-[#295DFA]"
                      : "text-[#94AEFF]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("golive")}
                >
                  <div className="flex justify-start items-center gap-4">
                  <i class="fa fa-rss" aria-hidden="true"></i>
                    <h1 className=" text-[16px]">Go Live</h1>
                  </div>
                </li>
              </Link>
              <Link to="/addnews">
                <li
                  className={`cursor-pointer  ${
                    selectedLink === "addnews" ? "font-bold" : ""
                  } ${
                    selectedLink === "addnews"
                      ? "text-[#295DFA]"
                      : "text-[#94AEFF]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("addnews")}
                >
                  <div className="flex justify-start items-center gap-4">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <h1 className=" text-[16px]">Add News</h1>
                  </div>
                </li>
              </Link>
              <Link to="/topnews">
                <li
                  className={`cursor-pointer  ${
                    selectedLink === "topnews" ? "font-bold" : ""
                  } ${
                    selectedLink === "topnews"
                      ? "text-[#295DFA]"
                      : "text-[#94AEFF]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("topnews")}
                >
                  <div className="flex justify-start items-center gap-4">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <h1 className=" text-[16px]">Top News</h1>
                  </div>
                </li>
              </Link>
              <Link to="/chats">
                <li
                  className={`cursor-pointer  ${
                    selectedLink === "messages" ? "font-bold" : ""
                  } ${
                    selectedLink === "messages"
                      ? "text-[#295DFA]"
                      : "text-[#94AEFF]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("messages")}
                >
                  <div className="flex justify-start items-center gap-4">
                    <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
                    <h1 className=" text-[16px]">Chat</h1>
                  </div>
                </li>
              </Link>
              <Link to="/schedules">
                <li
                  className={`cursor-pointer  ${
                    selectedLink === "schedules" ? "font-bold" : ""
                  } ${
                    selectedLink === "schedules"
                      ? "text-[#295DFA]"
                      : "text-[#94AEFF]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("schedules")}
                >
                  <div className="flex justify-start items-center gap-4">
                    <i class="fa fa-calendar-o" aria-hidden="true"></i>
                    <h1 className="text-[16px]">Calender</h1>
                  </div>
                </li>
              </Link>

              <Link to="/subscription">
                <li
                  className={`cursor-pointer  ${
                    selectedLink === "subscription" ? "font-bold" : ""
                  } ${
                    selectedLink === "subscription"
                      ? "text-[#295DFA]"
                      : "text-[#94AEFF]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("subscription")}
                >
                  <div className="flex justify-start items-center gap-4">
                    <i class="fa fa-suitcase" aria-hidden="true"></i>
                    <h1 className=" text-[16px]">Subscriptions</h1>
                  </div>
                </li>
              </Link>
              <Link to="/virtualoffice">
                <li
                  className={`cursor-pointer  ${
                    selectedLink === "virtualoffice" ? "font-bold" : ""
                  } ${
                    selectedLink === "virtualoffice"
                      ? "text-[#295DFA]"
                      : "text-[#94AEFF]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("virtualoffice")}
                >
                  <div className="flex justify-start items-center gap-4">
                    <i class="fa fa-bell" aria-hidden="true"></i>
                    <h1 className=" text-[16px]">Virtual Office</h1>
                  </div>
                </li>
              </Link>
              <Link to="/verificationrequest">
                <li
                  className={`cursor-pointer  ${
                    selectedLink === "verificationrequest" ? "font-bold" : ""
                  } ${
                    selectedLink === "verificationrequest"
                      ? "text-[#295DFA]"
                      : "text-[#94AEFF]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("verificationrequest")}
                >
                  <div className="flex justify-start items-center gap-4">
                    <i class="fa fa-bell" aria-hidden="true"></i>
                    <h1 className=" text-[16px]">Verification Request</h1>
                  </div>
                </li>
              </Link>

              <Link to="/meetings">
                <li
                  className={`cursor-pointer  ${
                    selectedLink === "meetings" ? "font-bold" : ""
                  } ${
                    selectedLink === "meetings"
                      ? "text-[#295DFA]"
                      : "text-[#94AEFF]"
                  }  mb-4`}
                  onClick={() => handlePageSwitch("meetings")}
                >
                  <div className="flex justify-start items-center gap-4">
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                    <h1 className=" text-[16px]">Meetings</h1>
                  </div>
                </li>
              </Link>

              {/* Add more items */}
            </ul>
          </div>
          <div className="px-6">
            <ul>
              <li className="cursor-pointer text-[#94AEFF] mb-4">
                <div className="flex justify-start items-center gap-4">
                  {/* <img src={Img7} alt='profile' /> */}
                  <h1 className="text-[#94AEFF] text-[16px]">Settings</h1>
                </div>
              </li>
              <li className="cursor-pointer text-[#94AEFF] ">
                <label class="relative inline-flex items-center mb-5 cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span class="text-[#94AEFF] text-[16px] ml-3">Dark</span>
                </label>
              </li>
              <li className="cursor-pointer text-[#94AEFF] mb-4">
                <div className="flex justify-start items-center gap-4">
                  {/* <img src={Img7} alt='profile' /> */}
                  <h1 className="text-[#94AEFF] text-[16px]">Help</h1>
                </div>
              </li>
              <li className="cursor-pointer text-[#94AEFF] hover:font-bold mb-4">
                <div className="flex justify-start items-center gap-4">
                  {/* <img src={Img8} alt='profile' /> */}
                  <h1 className="text-[#D55F5A] text-[16px] " onClick={handleLogout}>Logout Account</h1>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}

        <div
          className={`flex-1 ${
            drawerOpen ? "ml-64" : ""
          } transition-all duration-300`}
        >
          <button
            className="fixed top-4 p-2 bg-white text-black shadow-xl font-bold rounded-full focus:outline-none"
            style={{ left: drawerOpen ? "15rem" : "2rem" }}
            onClick={handleDrawerToggle}
          >
            {drawerOpen ? "<" : ">"}
          </button>

          {/* page content */}

          <div className="p-1 mt-12">
            <Outlet />
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Drawer;
