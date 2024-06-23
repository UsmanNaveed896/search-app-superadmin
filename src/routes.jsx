import React from "react";
import Header from "./components/header/header";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import User from "./pages/user/user";
import Chats from "./pages/chatss/chats";
import AddNews from "./pages/addNews/addNews";
import TopNews from "./pages/topNews/topNews";
import VirtualOffice from "./pages/virtualOffice/virtualOffice";
import VerificationReq from "./pages/verificationReq/verificationReq";
import VerificationReqDetail from "./components/verificationReqDetail/verificationReqDetail";
import Subscription from "./pages/subscription/subscription";
import Meetings from "./pages/meetings/meetings";
import Layout from "../src/layouts/sidebarDrawer";
import Login from "./pages/login/login";
import Livestreaming from "./pages/golive/livestreaming";
import UiLayout from "./pages/golive/uiLayout";
import { Video } from "./pages/golive/uiLayout";
import AdminLiveStream from "./pages/golive/livestreamwebsocker";

const Routess = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && <Header />}
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route exact path="/" element={<Layout />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/chats" element={<Chats />} />
          {/* <Route exact path='/schedules' element={<Schedulers/>} /> */}
          <Route exact path="/addnews" element={<AddNews />} />
          <Route exact path="/topnews" element={<TopNews />} />
          <Route exact path="/virtualoffice" element={<VirtualOffice />} />
          <Route
            exact
            path="/verificationrequest"
            element={<VerificationReq />}
          />
          <Route
            exact
            path="/verificationdetail"
            element={<VerificationReqDetail />}
          />
          <Route exact path="/subscription" element={<Subscription />} />
          <Route exact path="/meetings" element={<Meetings />} />
          <Route exact path="/livestream" element={<UiLayout />} />
          {/* <Route exact path="/livestream" element={<AdminLiveStream />} /> */}

        </Route>
      </Routes>
    </>
  );
};

export default Routess;
