import React, { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProviders';
import {RiArrowDropDownLine} from "react-icons/ri"
import {BiBell} from "react-icons/bi"

function Navbar() {
  const {user} = useContext(AuthContext)
  const navItems = (
    <>

    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 w-full navbar-end ">
        <div className="navbar-end px-2">
          <BiBell size={28} className='mr-2'/>
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1 ">
              <div className="flex justify-between gap-2">
                <div className="avatar">
                  <div className="w-10 mask mask-squircle">
                    <img src="" />
                  </div>
                </div>
                <div className="flex flex-col gap-2 ">
                  {/* <div className="avatar block md:hidden">
                  <div className="w-10 mask mask-squircle">
                    <img src="" />
                  </div>
                  </div> */}
                  <p className="hidden lg:block">Welcome Back,</p>
                  <p className="text-xl hidden lg:block">Vishnu Swaroop</p>
                </div>
                <RiArrowDropDownLine size={48} className="hidden md:block" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="block lg:hidden">Vishnu</p>
              </li>
              <div className="divider p-0 m-0 w-full"></div>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
