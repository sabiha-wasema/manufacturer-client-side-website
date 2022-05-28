import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const DashboardSidebar = ({ children }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class='drawer drawer-mobile mt-20 bg-base-200'>
      <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content flex flex-col items-center justify-center'>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div class='drawer-side '>
        <label for='my-drawer-2' class='drawer-overlay'></label>
        <ul class='menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content'>
          <li>
            <NavLink to='/dashboard/add-tool'>Add Product</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/manage'>Manage Product</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/add-admin'>Add Admin</NavLink>
          </li>

          {
            admin && <li>
              <NavLink to='/dashboard/user'>All Users</NavLink>
            </li>

          }
        </ul>

      </div>
    </div>
  );
};

export default DashboardSidebar;