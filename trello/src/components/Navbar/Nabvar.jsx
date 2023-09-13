import React from "react";
import NavDropDown from "../../miniComponents/Navdropdown/NavDropDown";
import SearchInput from "../../miniComponents/NavComponents/SearchInput";
import Avatar from "../../miniComponents/NavComponents/Avatar";
import BellDropDown from "../../miniComponents/Navdropdown/BellDropDown";

const Nabvar = () => {
  return (
    <div>
      <div className="flex p-2 bg-transparent items-center">
        <div className="hidden md:flex justify-start">
          <h1 className="text-blue-lighter text-xl flex items-center font-sans italic">
            <svg
              className="fill-current h-8 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM21 36c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v24zm19-12c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v12z" />
            </svg>
            Trello
          </h1>
          {/* <input type="text" className=" rounded p-2" /> */}
          <NavDropDown title={"Work Space"}/>
          <NavDropDown title="Recent"/>
          <NavDropDown title="Started"/>
          <NavDropDown title="Templates"/>
        </div>
        <div className="mx-0 md:mx-auto"></div>
        <div className="flex items-center ml-auto">
        <div className="mt-1">
        <SearchInput />
        </div>
        <div>
            {/* <BellDropDown /> */}
        </div>
        <div className="ml-2">
        <Avatar />
        </div>
          {/* <img src="https://i.imgur.com/OZaT7jl.png" className="rounded-full" /> */}
        </div>
      </div>
    </div>
  );
};

export default Nabvar;
