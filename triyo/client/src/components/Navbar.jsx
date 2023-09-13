import React from "react";

const Navbar = ({title}) => {
    const navItems = <>
    <p className="text-4xl font-semibold text-white">{title}</p>
    </>
  return (
    <div className="navbar bg-blue-600">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden w-full">
            {navItems}
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navItems}
          </ul>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
