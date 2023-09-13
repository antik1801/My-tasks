import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { TitleContext } from "../context/ContextProvider";

const Main = () => {
    const {title, setTitle} = useContext(TitleContext)
  return (
    <>
    <Navbar title={title}/>
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center ">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Contacts</a>
          </li>
          <li>
            <a>Charts and Maps</a>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Main;
