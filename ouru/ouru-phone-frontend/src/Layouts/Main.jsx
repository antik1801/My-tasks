import React from "react";
import Navbar from "../components/shared/Navbar";
import {GiHamburgerMenu} from "react-icons/gi"
import {SlArrowRight} from "react-icons/sl"
import {BiBell} from "react-icons/bi"
import { Outlet } from "react-router-dom";


function Main() {
  return (
    <>
      <div className="drawer lg:drawer-open z-10">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <div className="w-full me-auto">
            <Navbar></Navbar>
            <div className="divider p-0 m-0 w-full"></div>
          </div>
          {/* Page content here */}
          <div className="w-full">
            <Outlet />
          </div>
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn  drawer-button lg:hidden mt-2 ml-2"
        >
          <GiHamburgerMenu className="me-1" />
          <img src="oru-pic.svg" alt="" />
        </label>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <button className="btn btn-outline text-xl font-bold mb-4 shadow-md">
                Dashboard
              </button>
            </li>
            <li>
              <button className="btn btn-outline text-xl mb-2">
                <SlArrowRight /> My Profile
              </button>
            </li>
            <li>
              <button className="btn btn-outline text-xl">
                <SlArrowRight /> My Connections
              </button>
            </li>
            <li className="mt-auto">
              <button className="btn text-xl">Log Out</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Main;
