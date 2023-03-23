import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>

      <Outlet />
    </div>
  );
};

export default Body;
