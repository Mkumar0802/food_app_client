import React, { useState, useEffect } from 'react'
import { Link, Outlet } from "react-router-dom";
import Downbar from './Downbar';
import {
  
  Nav,
 
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { logout } from ".././features/userAction";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => { }, [userInfo]);
  let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full relative top-0 left-0  '>
      <div className='md:flex items-center justify-between bg-slate-900   py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      '>
          <span className='text-3xl mr-1 pt-2 text-white'>
            <Link to="/home" >CFC</Link>
          </span >

        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={` text-white md:flex gap-3 md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-3/4 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? '  top-20 ' : 'top-[-490px]  '}`}>


          <li className=" rounded-lg px-4 py-2  ">
            <Link to="/">Our Menu</Link>
          </li>
          <li className=" rounded-lg px-4 py-2  ">
            <Link to="/">RESTAURANTS NEAR ME</Link>
          </li>

          <li className=" rounded-lg px-4 py-2   ">
            <Link to="/">GIFT CARD</Link>
          </li>
          <li className=" rounded-lg px-4 py-2   ">
            <Link to="/">CORPORATE ENQUIRY</Link>
          </li>
          <li className=" rounded-lg px-4 py-2   ">
            <Link to="/">CONTACT</Link>
          </li>
         
          <li className="sm:hidden  md:block  rounded-lg px-4 py-2  bg-red-600 hover:bg-red-700 ">
            <Link to="/">DOWNLOAD APP</Link>
          </li>
          <li className=" rounded-lg px-4 py-2  bg-red-600 hover:bg-red-700  ">
            <Link to="/">ORDER ONLINE NOW</Link>

          </li>
          <Nav>
          {userInfo ? (
            <>

              <NavDropdown
                title={`${userInfo.name}`}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/profile">
                  {/* <img
                      alt=""
                      src={`${userInfo.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                    /> */}
                  My Profile
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <div className="  sm:hidden  md:block  rounded-lg  bg-red-600 hover:bg-red-700 ">   <Nav.Link href="/login">Login</Nav.Link></div>
          )}
        </Nav>

        </ul>
       
        <Outlet />
      </div>
      <Downbar />
    </div>

  )
}

export default Header;