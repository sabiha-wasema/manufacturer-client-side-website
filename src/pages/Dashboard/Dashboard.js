import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router-dom";
/* import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin"; */
import DashboardSidebar from "./DashboardSidebar";

const Dashboard = () => {
  /*  const [user] = useAuthState(auth);
   const [admin] = useAdmin(user); */
  return (
    <DashboardSidebar>
      <Outlet />
    </DashboardSidebar>
  );
};

export default Dashboard;

