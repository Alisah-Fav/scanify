import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  const user = {
  firstName: 'Stev',
  lastName: 'Smith',
  email: 'stev@example.com',
};
  return (
    <div>
      <Sidebar />
      <Navbar user={user}/>
      <div className="ml-60 flex flex-col gap-y-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
